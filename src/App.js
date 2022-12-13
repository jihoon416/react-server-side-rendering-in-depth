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

    if (typeof window === 'undefined') {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <button onClick={handleDecrement}>-1</button>
            <span>  {count}  </span>
            <button onClick={handleIncrement}>+1</button>
            <h1>My Name is {window.localStorage.getItem('My Name')}</h1>
        </>
    )
}

export default App
