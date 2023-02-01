import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/> {/** ExpenseDate의 props를 통해 date를 받아옴*/}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}원</div>
      </div>
    </div>
  );
}
