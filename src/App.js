import * as React from 'react'
import { useEffect, useState } from 'react'

const App = ({ names }) => {
    const [count, setCount] = useState(0)
    const [isMounted, setIsMounted] = useState(false)

    const handleDecrement = () => {
        setCount((count) => count - 1)
    }

    const handleIncrement = () => {
        setCount((count) => count + 1)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>
            <button onClick={handleDecrement}>-1</button>
            <span>  {count}  </span>
            <button onClick={handleIncrement}>+1</button>
            {!isMounted && <h1>Loading...</h1>}
            {isMounted && <h1>My Name is {window.localStorage.getItem('My Name')}</h1>}
            {names.map((name) => (
                <h2 key={name}>{name}</h2>
            ))}
        </>
    )
}

export default App
