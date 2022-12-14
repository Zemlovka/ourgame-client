import React from "react";

import { Navigate, Link , useNavigate} from "react-router-dom";

function AboutMenu()
{
    const navigate = useNavigate(); 

    return(
        <div className="Menu-container">
            <div className="AboutMenuBox">
               
               <button onClick={returnToMainMenu} className="RoundReturnButton">
                &lt;
               </button>

                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nihil reiciendis ipsum modi accusamus.
                Iusto fugiat minima ratione enim doloribus autem.
                Nisi maxime accusamus ad ratione quia sit suscipit tempore aut!
                </p>
                
            </div>
        </div>

    );

    function returnToMainMenu()
    {           
        console.log("RETURN PRESSED!");
        navigate("/");
    }
}

export default AboutMenu;