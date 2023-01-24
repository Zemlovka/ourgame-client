import {
  BrowserRouter,
  generatePath,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

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
import './css/HostLobbyMenu.css'

//components
import Auth from './components/Auth'
import Main from './components/Main'
import Lobby from './components/Lobby';

// Other Menus
import AboutMenu from "./components/menus/AboutMenu"
import ProfileMenu from "./components/menus/ProfileMenu"
import SettingsMenu from "./components/menus/SettingsMenu"
import SearchMenu from "./components/menus/SearchMenu"
import HostLobbyMenu from './components/menus/HostLobbyMenu';


import {createCustomTheme} from "./CustomTheme"  

let theme = createCustomTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<HostLobbyMenu />} />
          <Route path="/profile" element={<ProfileMenu />} />
          <Route path="/about" element={<AboutMenu />} />
          <Route path="/settings" element={<SettingsMenu />} />
          <Route path="/lobby/:id" element={<Lobby/>}/>
          <Route path="/search" element={<SearchMenu />} />


        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App