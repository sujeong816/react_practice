// import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function App() {
  const name = "김수정";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green"
    }

  }
  const number = 5
  
  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b style={style.bold_text} id="bold_text">
        {number}는 {number%2==0 ? "짝수" : "홀수"}이다.
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
