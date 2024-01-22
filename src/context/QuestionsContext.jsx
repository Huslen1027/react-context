import React, { useContext, createContext } from "react";

const QuestionsContext = createContext();

export function QuestionProvider({ children }) {
  return <QuestionsContext.Provider>{children}</QuestionsContext.Provider>;
}
