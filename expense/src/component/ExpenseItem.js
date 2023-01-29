import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__description">Date</div>
      <h2>Title</h2>
      <div className="expense-item__price">Amount</div>
    </div>
  );
}
