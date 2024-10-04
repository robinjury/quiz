import React, { createContext, useState, ReactNode } from "react";

interface QuizQuestion {
  category: string;
  id: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: "easy" | "medium" | "hard";
  regions: string[];
  isNiche: boolean;
}

interface QuizContextType {
  quiz: QuizQuestion[] | undefined;
  setQuiz: React.Dispatch<React.SetStateAction<QuizQuestion[] | undefined>>;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [quiz, setQuiz] = useState<QuizQuestion[] | undefined>(undefined);

  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
