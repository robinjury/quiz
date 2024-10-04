import { Button } from "@aws-amplify/ui-react";
import { useQuiz } from "../state/useQuiz";
import { useState, useEffect } from "react";

export function Play() {
  const { quiz } = useQuiz();
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [result, setResult] = useState<{ [key: number]: string }>({});
  const [warning, setWarning] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<{
    [key: number]: string[];
  }>({});

  useEffect(() => {
    if (quiz) {
      const shuffled = quiz.reduce((acc, question, index) => {
        acc[index] = shuffle([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);
        return acc;
      }, {} as { [key: number]: string[] });
      setShuffledOptions(shuffled);
    }
  }, [quiz]);

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSelect = (questionIndex: number, selectedOption: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length !== quiz?.length) {
      setWarning("Please answer all questions before submitting.");
      return;
    }
    setWarning(null);

    const resultTemp: { [key: number]: string } = {};
    quiz?.forEach((question, index) => {
      resultTemp[index] =
        selectedAnswers[index] === question.correct_answer
          ? "correct"
          : "incorrect";
    });
    setResult(resultTemp);
  };

  return (
    <div className="m-6">
      <h1>Play Quiz</h1>
      {quiz ? (
        <ul>
          {quiz.map((question, index) => {
            const options = shuffledOptions[index];

            return (
              <li key={index} className="m-4">
                <h2>{question.question}</h2>
                <div>
                  {options?.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          onChange={() => handleSelect(index, option)}
                          checked={selectedAnswers[index] === option}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {result[index] && (
                  <p
                    style={{
                      color: result[index] === "correct" ? "green" : "red",
                    }}
                  >
                    {result[index] === "correct"
                      ? "Correct"
                      : `Incorrect. Correct answer: ${quiz[index].correct_answer}`}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No quiz data available</p>
      )}
      {warning && <p style={{ color: "red" }}>{warning}</p>}
      <Button className="mx-2" onClick={handleSubmit}>
        Submit Quiz
      </Button>
      <Button>Save Quiz</Button>
    </div>
  );
}
