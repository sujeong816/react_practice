import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  function SaveExpenseDate(enteredExpenseData) {
    const expenseData = { /** ExpenseForm의 submitHandler */
        ...enteredExpenseData,
        id: Math.random().toString() 
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDate} />
    </div>
  );
}
