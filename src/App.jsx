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

            <Route path="/menu/profile" element={<ProfileMenu/>}/>
            <Route path="/menu/about" element={<AboutMenu/>}/>
            <Route path="/menu/settings" element={<SettingsMenu/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default App