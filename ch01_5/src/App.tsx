import React from 'react';
import * as Data from './data'

function App() {
  console.log('App() 함수 호출됨')
  return (
    <div>
      <h1>안녕하세요 리액트</h1>
      <p>이름: {Data.randomName()}</p>
      <p>직업: {Data.randomJobtitle()}</p>
      <p>날짜: {Data.randomFullDateString()}</p>
      <img src={Data.picsumUrl(200,100)}/>
      <img src={Data.picsumUrl(300,200)}/>
    </div>
  );
}

export default App;
