import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import RegisMenu from "./menus/RegisMenu";
import LoginMenu from "./menus/LoginMenu";
import axios from "axios";

function Auth() {

  // (?) Separate menus for Login and Registration
  let loginMenu = <LoginMenu swapFunction={switchAuthMode} submitFunction={submitForm} />;
  let regisMenu = <RegisMenu swapFunction={switchAuthMode} submitFunction={submitForm} />;

  // (?) Current mode and Current menu
  let [authMode, setAuthMode] = useState("LOGIN");
  let [authMenu, setAuthMenu] = useState(loginMenu);

  // [!] TEMP ----------------------------------------------------------------
  let [isAuthenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);
  // [!] TODO: Check why it doesn't work properly...
  // let isAuthenticated = useRef( localStorage.getItem("isAuthenticated")===true ? true : false);
  // DB analog for tests :)
  const users = [{ username: "1", password: "1234" }, { username: " ", password: " " }, { username: "admin", password: "admin" }, { username: "ABOBA", password: "1" }];
  // -------------------------------------------------------------------------

  // Navigation for redirection to Main Menu
  const navigate = useNavigate();

  function submitForm(formInput) {
    // (!!!) Curring Pattern
    // TODO: read more about this pattern...
    return (
      (event) => {
        console.log("User authenticated? ", isAuthenticated);
        event.preventDefault();
        console.log("Submition...");

        let firstToken = formInput['username'] + ':' + formInput['password'];
        let hash = btoa(firstToken);

        let authRequest = "Basic " + hash; //для логина блять

        console.log(formInput);
        console.log(authRequest);

        // [!] TODO: MASSIVE REWORK
        switch (authMode) {
          case "REGIS":
            console.log("Registration...");
            break;
          case "LOGIN":
            login(authRequest);
            break;
          default:
        }
      }
    );
  }


  function login(authRequest) {
    /*
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
    */
    /*
    let authURL = "25.74.83.186:8080/api/token";
 
     axios.post(authURL, authRequest)
     .then(resp => {
       console.log("cekam tyvole")
       console.log(resp.data);
       localStorage.setItem(resp.data)})
       .catch(err => console.log(err))
     
       */

    let authHeader = new Headers();
    authHeader.append("Authorization", authRequest);
    authHeader.append("Access-Control-Allow-Origin", "*");
    authHeader.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");

    let authOptions = {
      method: 'POST',
      headers: authHeader,
      redirect: 'follow'
    };

    fetch("http://25.74.83.186:8080/api/token", authOptions)
      .then(response => response.text())
      .then(result => {
        console.log('token' + result);
        localStorage.setItem("token", result);


        /////////////////////////////// fetch to get data inside fetch request (nested fetch)
        let dataHeader = new Headers();
        dataHeader.append("Authorization", "Bearer " + localStorage.getItem('token'));
        dataHeader.append("Access-Control-Allow-Origin", "*");
        dataHeader.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");

        let dataOptions = {
          method: 'GET',
          headers: dataHeader,
          redirect: 'follow'
        };


        fetch("http://25.74.83.186:8080/api/test", dataOptions)
          .then(response => response.text())
          .then(result => {
            console.log("data" + result);
            let data = JSON.parse(result);
            localStorage.setItem("username", data['string']);
            localStorage.setItem("avatar", data['image']);
            console.log("Username" +localStorage.getItem('username'));
            console.log("Avatar" +localStorage.getItem('avatar'));

          })
          .catch(error => console.log('error', error));
        ///////////////////////////////////





        navigate("/");
      })
      .catch(error => console.log('error', error));


  }

  function switchAuthMode() {
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

  useEffect(() => { setAuthMenu(authMode === "REGIS" ? regisMenu : loginMenu) }, [authMode]);

  return (
    <div className="Wrapper-narrow">
      {authMenu}
    </div>
  )

}
export default Auth;