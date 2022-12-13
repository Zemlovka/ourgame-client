import React, { useEffect, useState} from "react";
import { Navigate, Link } from "react-router-dom";

import Auth from "./Auth";

function Menu() {


    if (!localStorage.getItem("authenticated")) {
        console.log("not authenticated");
        return <Navigate replace to="/auth" />;
    } else {
        return (
            <div className="Menu-container">
                <div className="Menu">
                    <h2>Menu</h2>
                    <div className="Menu-buttons">
                    <Link to='/auth'>Find a lobby</Link>
                    <Link to='/auth'>Create a lobby</Link>
                    <Link to='/auth'>My profile</Link>
                    <Link to='/auth'>About game</Link>
                    <Link to='/auth'>Settings</Link>
                    </div>
                </div >
            </div>
            
        );
    }
};


export default Menu
