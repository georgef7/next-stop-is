import { useState } from 'react'
import Button from '@mui/material/Button'
import { getTheme } from './AppStyles'
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ThemeProvider } from '@mui/material/styles';
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState<'light' | 'dark'>('light'); // State to manage the theme mode
    const theme = getTheme(mode);

    if (count > 8) {
        // reset
        setCount(0);
    }
    // sample list of MARTA stations for now
    const stationList = ['Doraville', 'Chamblee', 'Brookhaven', 'Lenox', 'Lindbergh Center', 'Arts Center', 'Midtown', 'North Avenue', 'Civic Center'];

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px'
                }}
            >
                <FormControl>
                    <FormLabel id="theme-toggle">Select a Theme</FormLabel>
                    <RadioGroup
                        aria-labelledby="theme-toggle"
                        name="theme-toggle"
                        row
                        value={mode}
                        onChange={(event) =>
                            setMode(event.target.value as 'light' | 'dark')
                        }
                    >
                        <FormControlLabel value="light" control={<Radio />} label="Light" />
                        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                    </RadioGroup>
                </FormControl>
            </Box>


            <Box className="card"
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary'
                }}>
                <h1>Next Stop is</h1>
                <Button variant='contained' onClick={() => setCount((count) => count + 1)}>
                    The next stop is: {stationList[count]}
                </Button>
                <h2>A passenger information display project</h2>
                <Box data-testid='George-Message'>
                    Hello World! It's George! Meow~~
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App
