import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
//components
import Login from './components/Auth'
import Menu from './components/Menu'

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Login/>} />
            <Route path="/" element={<Menu/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App