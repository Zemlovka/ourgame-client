import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { ThemeProvider, createTheme } from "@mui/material/styles";

// CSS
import './css/App.css'
import './css/Wrappers.css'

import './css/Auth.css'
import './css/Main.css'
import './css/Submenu.css'
import './css/AboutMenu.css'
import './css/ProfileMenu.css'
import './css/SettingsMenu.css'
import './css/SearchMenu.css'
import './css/Menus.css'

//components
import Auth from './components/Auth'
import Main from './components/Main'

// Other Menus
import AboutMenu from "./components/menus/AboutMenu"
import ProfileMenu from "./components/menus/ProfileMenu"
import SettingsMenu from "./components/menus/SettingsMenu"
import SearchMenu from "./components/menus/SearchMenu"

const theme=createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#6832E3',
      },
      secondary: {
        main: '#2E053D',
      },
      background: {
        default: '#2E053D',
      },
    },
    shape: {
      borderRadius: 10,
    },
  });


const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Auth/>} />
            <Route path="/" element={<Main/>} />

            <Route path="/profile" element={<ProfileMenu/>}/>
            <Route path="/about" element={<AboutMenu/>}/>
            <Route path="/settings" element={<SettingsMenu/>}/>

            <Route path="/search" element={<SearchMenu/>}/>


        </Routes>
        </BrowserRouter>
        </ThemeProvider>
    )
}

export default App