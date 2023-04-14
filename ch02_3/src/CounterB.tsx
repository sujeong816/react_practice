import { useState } from "react"

export default function CounterB() {
    console.log("CounterB 호출됨")
    const [value, setValue] = useState<number>(0)

    return (
        <div className="box">
            <h1>CounterB</h1>
            <button onClick={()=>setValue(value+1)}>
                {value}
            </button>
        </div>
    )
}