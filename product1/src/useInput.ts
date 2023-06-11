import { useState, ChangeEvent } from 'react' 

type OnChange = (e: ChangeEvent<HTMLInputElement>) => void
type SetState<T> = (t: T) => void

function useInput<T>(initData: T) : [T, SetState<T>, OnChange] { 
    const [data, setData] = useState<T>(initData)
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => { 
        if (e.target.value) 
            setData({ ...data, [e.target.name]: e.target.value })
        else 
            setData({ ...data, [e.target.name]: e.target.checked })
    }
    return [data, setData, onChange]
} 

export default useInput;