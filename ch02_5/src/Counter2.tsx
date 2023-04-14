import { IncreaseFunc } from "./types";

type Props = {
  count: number;
  increase: IncreaseFunc;
};

function Counter2({ count, increase }: Props) {
  return (
    <div>
      <p>count: {count}</p> 
      <button onClick={increase}>increase</button>
    </div>
  );
}
export default Counter2;
