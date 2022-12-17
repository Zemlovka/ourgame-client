import React, { useEffect, useState, useRef  } from "react";
import { useNavigate } from "react-router-dom";

import RegisMenu from "./menus/RegisMenu";
import LoginMenu from "./menus/LoginMenu";

function Auth() {
  
  // (?) Separate menus for Login and Registration
  let loginMenu = <LoginMenu swapFunction={switchAuthMode} submitFunction={submitForm}/>;
  let regisMenu = <RegisMenu swapFunction={switchAuthMode} submitFunction={submitForm}/>;

  // (?) Current mode and Current menu
  let [authMode, setAuthMode] = useState("LOGIN");
  let [authMenu, setAuthMenu] = useState(loginMenu);

  // [!] TEMP ----------------------------------------------------------------
  let [isAuthenticated, setAuthenticated]= useState(localStorage.getItem("authenticated") || false);
    // [!] TODO: Check why it doesn't work properly...
    // let isAuthenticated = useRef( localStorage.getItem("isAuthenticated")===true ? true : false);
  // DB analog for tests :)
  const users = [{ username: "1", password: "1234" }, { username: " ", password: " " }, { username: "admin", password: "admin" }, { username: "ABOBA", password: "1" }]; 
  // -------------------------------------------------------------------------

  // Navigation for redirection to Main Menu
  const navigate = useNavigate(); 

  function submitForm(formInput)
  {
    // (!!!) Curring Pattern
    // TODO: read more about this pattern...
    return(
      (event) =>
      {
        console.log("User authenticated? ",isAuthenticated);
        event.preventDefault();
        console.log("Submition...");
        console.log(formInput);

        // [!] TODO: MASSIVE REWORK
        switch(authMode)
        {
          case "REGIS":
            console.log("Registration...");
            break;
          case "LOGIN":
            login(formInput);
            break; 
          default:
        }
      }
    );
  }


  function login(formInput)
  {
    console.log("Searcing user...");
    for (let i = 0; i < users.length; i++) 
    {
      if ((formInput["password"]===users[i].password) && (formInput["username"]===users[i].username))
      {
        console.log("User found...");
        console.log("User authenticated? ",isAuthenticated);
        if(isAuthenticated)
        {
          console.log('User SHOULD BE ALREADY logged in...');
          localStorage.setItem("isAuthenticated",true)
          navigate("/");
        }
        else
        {
          setAuthenticated(true);
          localStorage.setItem("isAuthenticated",true)
          console.log("User authenticated!");
          navigate("/");
        }
        
        return;
      }
    } 
    console.log("User not found...");
  }


  function switchAuthMode()
  {
    console.log("Switching Auth Mode...");
    setAuthMode(authMode === "REGIS" ? "LOGIN" : "REGIS");

    // [!] ОЧЕНЬ тупой способ (но рабочий)
      // if(authMode === "REGIS") {authMode="LOGIN";} else {authMode="REGIS";}
      // setAuthMode(authMode);
      // if(authMode === "REGIS") {authMenu=<RegisMenu/>;} else {authMenu=<LoginMenu/>;}
      // setAuthMenu(authMenu);

    // [!] Если сделать изменение таким путем, то authMenu не изменится сразу
      // setAuthMode(authMode === "REGIS" ? "LOGIN" : "REGIS");
      // setAuthMenu(authMode === "REGIS" ? <RegisMenu/> : <LoginMenu/>);
  }

  useEffect(() => {setAuthMenu( authMode === "REGIS" ? regisMenu : loginMenu)}, [authMode]);

  return(
    <div className="Wrapper-narrow">
      {authMenu}
    </div>
  )

}
export default Auth;