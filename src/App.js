import * as React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
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
            {!isMounted && <h1>Loading...</h1>}
            {isMounted &&
                <>
                    <button onClick={handleDecrement}>-1</button>
                    <span>  {count}  </span>
                    <button onClick={handleIncrement}>+1</button>
                    <h1>My Name is {window.localStorage.getItem('My Name')}</h1>
                </>
            }
        </>
    )
}

export default App
