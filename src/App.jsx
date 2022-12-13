import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// CSS
import './App.css'
import './Menus.css'

//components
import Login from './components/Auth'
import Menu from './components/Menu'

// Other Menus
import AboutMenu from "./components/menus/AboutMenu"
import ProfileMenu from "./components/menus/ProfileMenu"
import SettingsMenu from "./components/menus/SettingsMenu"

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Login/>} />
            <Route path="/" element={<Menu/>} />

            <Route path="/profile" element={<ProfileMenu/>}/>
            <Route path="/about" element={<AboutMenu/>}/>
            <Route path="/settings" element={<SettingsMenu/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default App