import { useState } from "react"

export default function Main() {
    const [count, setCount] = useState({ count: 0, step: 1 })   
    
    const increment = () => {
        setCount(prev => {
            return {...prev, count: prev.count + prev.step}
        })
    }

    const decrement = () => {
        setCount(prev => {
            if (prev.count > 0) {
                return {...prev, count: prev.count - prev.step}
            } else {
                console.log("Can't go below 0!")
                return prev
            }
        })
    }

    const handleStep = (e) => {
        setCount(prev => {
            return {...prev, step: Number(e.target.value)}
        })
    }
    
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Step</span>
                <input value={count.step} onChange={handleStep} type="number" className="form-control" placeholder="Enter steps" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="btn-group d-flex justify-content-center gap-2">
                <button onClick={increment} className="btn btn-primary">+</button>
                <button onClick={decrement} className="btn btn-primary">-</button>
            </div>
            <div className="input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">Count</span>
                <input type="text" className="form-control" value={count.count} disabled aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </>
    )
}