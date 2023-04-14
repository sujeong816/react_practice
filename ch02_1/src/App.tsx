// import React from "react";
// import "./App.css";

// function App() {
//   let persons = [
//     { name: "홍길동", age: 15 },
//     { name: "임꺽정", age: 19 },
//     { name: "전우치", age: 20 },
//   ];
//   let trlist = persons.map((person) => (
//     <tr>
//       <td>{person.name}</td>
//       <td>{person.age}</td>
//     </tr>
//   ));
//   return (
//     <table>
//       <tr>
//         <td>이름</td>
//         <td>나이</td>
//       </tr>
//       {trlist}
//     </table>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Message from "./Message";
import MyTable from "./MyTable";
import PersonTable, { Person } from "./PersonTable";

function App() {
  let persons1: Person[] = [
    { id: 31, name: "홍길동", age: 16 },
    { id: 32, name: "임꺽정", age: 19 },
    { id: 33, name: "전우치", age: 20 },
  ];
  let persons2 = persons1.slice(0);
  persons2.reverse();

  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrease = () => {
    setCount(count - 1);
    console.log(count);
  };

  const [message, setMessage] = useState("hello");

  const [value, setValue] = useState(true);
  const helloTag = <div id="hello">Hellot React.js</div>;

  const [color, setColor] = useState("green");

  const [gender, setGender] = useState("여자");

  return (
    <div>
      <MyTable />
      <hr />
      <MyTable />
      <Message value="안녕하세요" color="blue" />
      <PersonTable persons={persons1} />
      <hr />
      <PersonTable persons={persons2} />
      <hr />
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <p>{message}</p>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <div id="app" className={color}>
        <p>{value ? "true" : "false"}</p>
        <hr />
        <input
          id="check"
          type="checkbox"
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
        {value ? helloTag : null}

        <h1>select</h1>
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option>yellow</option>
          <option>green</option>
          <option>blue</option>
          <option>red</option>
        </select>

        <p>{gender}</p>
        <hr />
        <label>
          <input
            type="radio"
            name="gender"
            onChange={(e) => setGender("남자")}
            checked={gender === "남자"}
          />
          <span>남자</span>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            onChange={(e) => setGender("여자")}
            checked={gender === "여자"}
          />
          <span>여자</span>
        </label>
      </div>
    </div>
  );
}

export default App;
