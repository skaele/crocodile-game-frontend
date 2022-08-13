import Routing from './routing'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { appStarted } from '@config/system-events/app-started'

const App = () => {
    useEffect(() => {
        appStarted()
    }, [])

    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    )
}

export default App
