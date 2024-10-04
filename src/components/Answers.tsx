import formatQuestion from "../utils/formatQuestion";
import { useQuiz } from "../state/useQuiz";

export function Answers() {
  const { quiz } = useQuiz();

  return (
    <div className="border border-2-black p-4">
      <h1>Your new quiz round</h1>
      <ul className="m-2">
        {quiz?.map((question, index) => (
          <>
            <li>Category - {question.category}</li>
            <li>
              Question {index + 1} : {formatQuestion(question.question)}
            </li>
            <li>
              Incorrect answers:
              <ul>
                {question.incorrect_answers.map((answer) => (
                  <li>{answer}</li>
                ))}
              </ul>
            </li>
            <li>Correct answers: {question.correct_answer}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
