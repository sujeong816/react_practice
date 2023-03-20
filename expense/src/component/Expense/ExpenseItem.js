import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  //const [title, setTitle] = useState(props.title); /** [ , ]: 독립적인 두 요소인 상수나 변수를 저장하기 위함
  //title: 관리되고 있는 값. 현재 설정된 값. 초기값으로 props.title 저장
  //  setTitle: 새로운 title을 설정하기 위해 호출 가능한 함수. 현재 설정된 값 업데이트 위한 함수*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />{" "}
        {/** ExpenseDate의 props를 통해 date를 받아옴*/}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}원</div>
        </div>
      </Card>
    </li>
  );
}
