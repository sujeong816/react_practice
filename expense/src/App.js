import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const App = () => {
  /** syntax 또 다른 함수 작성 방법 */
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2024, 5, 12),
    },
  ];

  function addExpenseHandler(expense) {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
