import React, { useEffect, useState} from "react";
import { Navigate, Link } from "react-router-dom";

import SimpleButton from "./ui_components/SimpleButton";

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
                            <SimpleButton className="Button"  text="Find a lobby"/>
                        </Link>

                        <Link to='/create'>
                            <SimpleButton className="Button" text="Create a lobby"/>
                        </Link>

                        <Link to='/profile'>
                            <SimpleButton className="Button" text="Profile"/>
                        </Link>

                        <Link to='/about'>
                            <SimpleButton className="Button"  text="About"/>
                        </Link>

                        <Link to='/settings'>
                            <SimpleButton className="Button" text="Settings"/>
                        </Link>
                    </div>
                </div >
            </div>
            
        );
    }
};


export default Main
