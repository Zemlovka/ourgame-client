import React, { useEffect, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";


import SimpleButton from "./ui_components/SimpleButton";
import Button from '@mui/material/Button';
import CustomButton from "../components_mui_based/CustomButton";


function Main() {

    const navigate = useNavigate();

    
    function transition(path)
    {
        navigate(path);
    }

    // [!] TEMP
    if (!localStorage.getItem("token") && false) {
        console.log("Not authenticated");
        console.log(localStorage.getItem("token"));

        return <Navigate replace to="/auth" />;
    } else {
        return (
            <div className="Wrapper-main">
                <div className="Main-box">
                    <h1 className="Title">Main Menu</h1>

                    <div className="Main-buttons">

                        <CustomButton isUppercase={true} onClick={()=>{transition("/search")}} variant="contained">
                            Find a lobby
                        </CustomButton>

                        <CustomButton isUppercase={true}  onClick={()=>{transition("/create")}} variant="contained">
                            Create a lobby
                        </CustomButton>

                        <CustomButton isUppercase={true}  onClick={()=>{transition("/profile")}} variant="contained">
                            My profile
                        </CustomButton>

                        <CustomButton isUppercase={true}  onClick={()=>{transition("/about")}} variant="contained">
                            About
                        </CustomButton>

                        <CustomButton isUppercase={true}  onClick={()=>{transition("/settings")}} variant="contained">
                            Settings
                        </CustomButton>

                        {/* 
                        <Button component={Link} to="/settings" variant="contained" color="primary">
                            Settings
                        </Button>
                        */}
                    </div>
                </div >
            </div>

        );
    }
};


export default Main
