import { ChangeEvent, useState } from "react";
import { SetMessageFunc } from "./types";

type Props = {
  message: string;
  setMessage: SetMessageFunc;
};

export default function Message({ message, setMessage }: Props) {
  const [msg, setMsg] = useState(message);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value);
  const onClick = () => setMessage(msg);

  return (
    <div>
      <input type="text" onChange={onChange} value={msg} />
      <button onClick={onClick}>ok</button>
    </div>
  );
}
