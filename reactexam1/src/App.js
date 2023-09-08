import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

function App() {
  
  const countValue = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5
  }
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...countValue}/>
      </div>
    </Container>
  );
}

export default App;
