import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [ //기본 데이터
  {
    id: "e1",
    title: "휴지",
    amount: 23000,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "프론트엔드 책", amount: 13000, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "콜드컵",
    amount: 18500,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "간이책상",
    amount: 38000,
    date: new Date(2024, 5, 12),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
