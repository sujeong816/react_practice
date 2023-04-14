import React, { ChangeEvent, useReducer } from "react";
import { reducer, initialState } from "./counterReducer";
import type { ActionType } from "./counterReducer";
import "./Counter.css";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onIncrease = () => {
    const action: ActionType = { type: "increaseCount" };
    dispatch(action);
  };
  const onDecrease = () => {
    const action: ActionType = { type: "decreaseCount" };
    dispatch(action);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const action: ActionType = {
      type: "setStep",
      payload: { step: parseInt(e.target.value) },
    };
    dispatch(action);
  };
  return (
    <div className="Counter">
      <h1>Counter</h1>
      <p>{state.count}</p>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
      <hr />
      <input type="number" onChange={onChange} value={state.step} />
    </div>
  );
}
