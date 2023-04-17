import { useReducer } from "react";
import { initialState, reducer } from "./myReducer";
import Message from "./Message";
import Counter from './Counter'

export default function App(){
  const [state,dispatch]=useReducer(reducer,initialState)
  return(
    <div style={{textAlign:'center'}}>
      <p>message:{state.message}</p>
      <Message message={state.message} dispatch={dispatch}/>
      <hr/>
      <Counter count={state.count} dispatch={dispatch}/>
    </div>
  )
}