/** 일반적으로 웹 개발 시 Card는 카드처럼 생긴 요소들이 있는 컨테이너 모양을 의미함 */
import "./Card.css";

export default function Card(props) {
  //props를 받아오지 않으면 데이터가 있어도 빈칸만 뜬다

  const classes = 'card ' + props.className; /** 밖에서 className을 받으면 문자열로 추가된다. */

  return (
    <div className={classes}>
      {props.children}
      {/** children : 예약어. 사용자 지정 컴포넌트의 태그 안에 있는 컨텐츠
       * 현재는 ExpenseItem의 <Card></Card> 사이에 있는 것들    */}
    </div>
  );
}
