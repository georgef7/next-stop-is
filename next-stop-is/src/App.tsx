import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React: Next Stop is</h1>
            <Box>A passenger information display project</Box>
            <div className="card">
                <Button variant='contained' onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <Box data-testid='George-Message'>
                    Hello World! It's George! Meow~~
                </Box>
                <Box>
                    {` /\_/\ \n
( o.o ) \n
 > ^ <`}
                </Box>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
