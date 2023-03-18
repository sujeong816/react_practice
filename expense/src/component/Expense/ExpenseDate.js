import Card from "../UI/Card";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" }); /** 2자리 */
  const year = props.date.getFullYear(); /** 4자리 */

  return (
    <Card className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__month">{month}</div>
        {/** toLacaleString: 인간이 읽을 수 있는 형태로 date 출력*/}

        <div className="expense-date__day">{day}</div>
      </Card>
  );
}
