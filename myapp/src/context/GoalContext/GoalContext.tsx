import { createContext, useState } from "react";

type stateObj = {
  _id: String;
  Amount: String;
  MonthsRemaining: String;
};

type contextObj = {
  goals: stateObj;
  setGoals: React.Dispatch<React.SetStateAction<stateObj>>;
};

export const goalsContext = createContext<contextObj | null>(null);

const GoalContext = ({ children }: any) => {
  const [goals, setGoals] = useState<stateObj>({
    _id: "",
    Amount: "",
    MonthsRemaining: "",
  });
  return (
    <goalsContext.Provider value={{ goals, setGoals }}>
      {children}
    </goalsContext.Provider>
  );
};

export default GoalContext;
