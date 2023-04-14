import { useState } from "react"

export default function CounterA() {
    console.log("CounterA 호출됨")
    const [value, setValue] = useState<number>(0)

    return (
        <div className="box">
            <h1>CounterA</h1>
            <button onClick={()=>setValue(value+1)}>
                {value}
            </button>
        </div>
    )
}