import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";

function Menu() {

    const [authenticated, setauthenticated] = useState(null);

    if (!localStorage.getItem("authenticated")) {
        console.log("not authenticated");
        return <Navigate replace to="/auth" />;
    } else {
        return (
            <div>
                <p>Welcome to your Menu</p>
            </div>
        );
    }
};


export default Menu
