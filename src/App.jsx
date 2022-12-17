import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// CSS
import './css/App.css'
import './css/Wrappers.css'

import './css/Auth.css'
import './css/Main.css'
import './css/Submenu.css'
import './css/AboutMenu.css'
import './css/ProfileMenu.css'
import './css/SettingsMenu.css'
import './css/Menus.css'

//components
import Auth from './components/Auth'
import Main from './components/Main'

// Other Menus
import AboutMenu from "./components/menus/AboutMenu"
import ProfileMenu from "./components/menus/ProfileMenu"
import SettingsMenu from "./components/menus/SettingsMenu"

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Auth/>} />
            <Route path="/" element={<Main/>} />

            <Route path="/profile" element={<ProfileMenu/>}/>
            <Route path="/about" element={<AboutMenu/>}/>
            <Route path="/settings" element={<SettingsMenu/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default App