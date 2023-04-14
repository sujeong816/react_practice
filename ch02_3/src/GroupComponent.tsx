import { useState } from "react"
import CounterA from "./CounterA"
import CounterB from "./CounterB"

export default function GroupComponent(){
    console.log('GropuComponent 호출됨')
    const [value, setValue]=useState<number>(0)

    return(
        <div className='box'>
            <h1>GroupComponent</h1>
            <button onClick={()=>setValue(value+1)}>
                {value}
            </button>
            <CounterA/>
            <CounterB/>
        </div>
    )
}