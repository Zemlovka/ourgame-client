import React, { useEffect, useState} from "react";
import { Navigate, Link } from "react-router-dom";


import SimpleButton from "./ui_components/SimpleButton";
import Button from '@mui/material/Button';

function Main() {

    // [!] TEMP
    if (!localStorage.getItem("token")) {
        console.log("Not authenticated");
        console.log(localStorage.getItem("token"));

        return <Navigate replace to="/auth" />;
    } else {
        return (
            <div className="Wrapper-main">
                <div className="Main-box">
                    <h1 className="Title">Main Menu</h1>

                    <div className="Main-buttons">
                    
                        <Link to='/search'>
                        <Button variant="contained" color="primary">Find a lobby</Button>
                        </Link>

                        <Link to='/create'>
                        <Button variant="contained" color="primary">Create a lobby</Button>
                        </Link>

                        <Link to='/profile'>
                        <Button variant="contained" color="primary">My profile</Button>
                        </Link>

                        <Link to='/about'>
                        <Button variant="contained" color="primary">About</Button>
                        </Link>

                        <Link to='/settings'>
                        <Button variant="contained" color="primary">Settings</Button>
                        </Link>
                    </div>
                </div >
            </div>
            
        );
    }
};


export default Main
