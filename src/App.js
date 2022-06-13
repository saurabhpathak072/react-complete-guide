import { useState } from "react";
import { expensesData } from "./Data/expenses";
import "./App.css";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Card from "./Components/UI/Card";

function App() {
  const [expenses] = useState(expensesData);

  return (
    <div>
      <h2>Let's get started</h2>
      <Card className="expenses">
        {expenses.map((exp, index) => (
          <ExpenseItem
            key={index}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
