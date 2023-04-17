import React from "react";
import { DispatchFunc } from "./myReducer";

type Props = {
  count: number;
  dispatch: DispatchFunc
}

export default function Counter({count, dispatch}: Props) {
  const onClick = ()=>dispatch({type:'increase'})
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={onClick}>increase</button>
    </div>
  )
}