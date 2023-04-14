import React, { useState } from 'react';
import './App.css';
import GroupComponent from './GroupComponent';

function App() {
 const [name, setName] = useState("")
 const [age, setAge] = useState(NaN)
 const [gender, setGender] = useState("")
 const [departmentId, setDepartmentId] = useState(0)

 console.log('App 호출됨')
 const [value, setValue] = useState<number>(0)

 const [arr, setArr] = useState<number[]>([0, 0])
 const increaseAt = (index: number) => {
  arr[index] = arr[index]+1
  setArr([...arr])
 }
 return (
  <div id="app">
    <h1>입력폼</h1>
    <div className='control'>
      <input type="text" placeholder='이름' onChange={e=>setName(e.target.value)} value={name}/>
    </div>
    <div className='control'>
      <input type='number' placeholder='나이' min="0" step="1" onChange={e=>setAge(parseInt(e.target.value))} value={age}/>
    </div>
    <div className='control'>
      <label>
        <input type="radio" name="gender" onChange={e=> setGender("남자")} checked={gender === "남자"}/>
        <span>남자</span>
        <input type="radio" name="gender" onChange={e=> setGender("여자")} checked={gender === "남자"}/>
        <span>여자</span>
      </label>
    </div>
    <select value={departmentId} onChange={e=>setDepartmentId(parseInt(e.target.value))}>
      <option value={0}>학과를 선택하세요</option>
      <option value={1}>소프</option>
      <option value={1}>컴공</option>
      <option value={1}>정통</option>
      <option value={1}>인공지능</option>
    </select>
    <hr/>
    <h1>입력된 값</h1>
    <div className='control'>이름: {name}</div>
    <div className='control'>나이: {age}</div>
    <div className='control'>성별: {gender}</div>
    <div className='control'>학과: {departmentId}</div>

    <div className="box">
      <h1>App</h1>
      <button onClick={()=>setValue(value+1)}>
        {value}
      </button>
      <GroupComponent />
    </div>

    <div className='box'>
      <h1>App</h1>
      <p>{arr.join(", ")}</p>
      <button onClick={()=>increaseAt(0)}>a[0]++</button>
      <button onClick={()=>increaseAt(1)}>a[1]++</button>
    </div>
  </div>
 )
}

export default App;
