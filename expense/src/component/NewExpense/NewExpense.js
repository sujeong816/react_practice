import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function SaveExpenseDate(enteredExpenseData) {
    const expenseData = {
      /** ExpenseForm의 submitHandler */ 
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>추가</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDate}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
