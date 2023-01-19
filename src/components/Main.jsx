import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";


import SimpleButton from "./ui_components/SimpleButton";
import Button from '@mui/material/Button';

function Main() {
    const navigate = useNavigate();

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

                    <Button component={Link} to="/search" variant="contained" color="primary">
                            Find a lobby
                        </Button>

                        <Button component={Link} to="/create" variant="contained" color="primary">
                            Create a lobby
                        </Button>

                        <Button component={Link} to="/profile" variant="contained" color="primary">
                            My profile
                        </Button>

                        <Button component={Link} to="/about" variant="contained" color="primary">
                            About
                        </Button>

                        <Button component={Link} to="/settings" variant="contained" color="primary">
                            Settings
                        </Button>
                    </div>
                </div >
            </div>

        );
    }
};


export default Main
