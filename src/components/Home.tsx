import {
  RadioGroupField,
  Radio,
  StepperField,
  SelectField,
  Button,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import formatQuestion from "../utils/formatQuestion";
import { useQuiz } from "../state/useQuiz";

export function Home() {
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
  const [category, setCategory] = useState<string>("9");
  const [difficulty, setDifficulty] = useState<string>("any");
  const [type, setType] = useState<string>("any");
  const { quiz, setQuiz } = useQuiz();

  const handleOnStepChange = (newValue: number) => {
    setNumberOfQuestions(newValue);
  };

  const formatURL = (
    numberOfQuestions: number,
    category: string,
    difficulty: string,
    type: string
  ) => {
    let difficultyURL;
    let typeURL;

    if (difficulty === "any") difficultyURL = "";
    else difficultyURL = `&difficulty=${difficulty}`;
    if (type === "any") typeURL = "";
    else typeURL = `&type=${type}`;

    return `https://opentdb.com/api.php?amount=${numberOfQuestions.toString()}&category=${category}${difficultyURL}${typeURL}`;
  };

  async function getQuiz() {
    try {
      const response = await fetch(
        formatURL(numberOfQuestions, category, difficulty, type)
      );
      const quiz = await response.json();
      setQuiz(quiz.results);
    } catch (error) {
      console.log("error fetching quiz", error);
    }
  }

  console.log({ quiz });

  return (
    <div className="m-12 flex">
      <div>
        <h1 className="p-8">Choose your custom quiz </h1>
        <StepperField
          className="max-w-48"
          max={50}
          min={1}
          step={1}
          value={numberOfQuestions}
          onStepChange={handleOnStepChange}
          label="Number of questions"
          defaultValue={10}
        />
        <RadioGroupField
          className="p-6"
          legend="Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <Radio value="9">General Knowledge</Radio>
          <Radio value="10">Entertainment: Books</Radio>
          <Radio value="11">Entertainment: Film</Radio>
          <Radio value="12">Entertainment: Music</Radio>
          <Radio value="13">Entertainment: Musicals and Theatres</Radio>

          <Radio value="14">Entertainment: Television</Radio>
          <Radio value="15">Entertainment: Video games</Radio>
        </RadioGroupField>
        <SelectField
          className="max-w-48 mb-2"
          label="Select difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="any">any</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </SelectField>
        <SelectField
          className="max-w-48 mb-6"
          label="Select Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="any">any</option>
          <option value="multiple">Multiple choice</option>
          <option value="boolean">True or False</option>
        </SelectField>
        <Button onClick={getQuiz}>Get quiz</Button>
      </div>
      <div>
        {quiz ? (
          <div className="border border-2-black p-4">
            <h1>Your new quiz round</h1>
            <h2>Category: {quiz[0].category}</h2>
            <ul className="m-2">
              {quiz.map((question, index) => (
                <li className="m-2">
                  Question {index + 1} : {formatQuestion(question.question)}
                </li>
              ))}
            </ul>
            <Button>
              <Link to="/play">Play quiz</Link>
            </Button>
            <Button>
              <Link to="/answers">Get answers</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
