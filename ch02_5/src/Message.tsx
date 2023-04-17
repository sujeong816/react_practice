import { ChangeEvent, useState } from "react";
import { DispatchFunc } from "./myReducer";

type Props = {
  message: string;
  dispatch: DispatchFunc;
};

export default function Message({ message, dispatch }: Props) {
  const [msg, setMsg] = useState(message);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value);
  const onClick = () => dispatch({type:'setMessage', payload:{message: msg}});

  return (
    <div>
      <input type="text" onChange={onChange} value={msg} />
      <button onClick={onClick}>ok</button>
    </div>
  );
}
