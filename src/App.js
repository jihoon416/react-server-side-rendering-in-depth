import * as React from 'react'
import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        setCount((count) => count - 1)
    }

    const handleIncrement = () => {
        setCount((count) => count + 1)
    }

    return (
        <>
            <button onClick={handleDecrement}>-1</button>
            <span>  {count}  </span>
            <button onClick={handleIncrement}>+1</button>
        </>
    )
}

export default App
