import { useState } from "react"
import React from "react"
import OddEvenResult from "./OddEvenResult"

function Counter({initialValue}) {

    const [count, setCount] = useState(initialValue) //0부터 시작

    function onIncrease() {
        setCount(count + 1)
    }

    function onDecrease() {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    )
}

Counter.defaultProps = { initialValue: 0 } //인자가 넘어오지 않을 때 생기는 오류를 대비
export default Counter