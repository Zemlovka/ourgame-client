import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import LobbyListItem from "../ui_components/LobbyListItem";

import { IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';


import { TextField } from "@mui/material";
import SearchTextField from "../ui_components/SearchTextField";


import { useNavigate } from "react-router-dom";

function SearchMenu() {
    const navigate = useNavigate();

    let [lobbies, setLobbies] = useState([]);
    let [searchText, setSearchText] = useState("");

    function getLobbies() {
        let dataHeader = new Headers();
        dataHeader.append(
            "Authorization",
            "Bearer " + localStorage.getItem("token")
        );
        dataHeader.append("Access-Control-Allow-Origin", "*");
        dataHeader.append(
            "Access-Control-Allow-Methods",
            "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        );

        let dataOptions = {
            method: "GET",
            headers: dataHeader,
            redirect: "follow",
        };

        fetch("http://25.74.83.186:8080/api/lobby", dataOptions)
            .then((response) => response.text())
            .then((result) => {
                setLobbies(JSON.parse(result));
            })
            .catch((error) => console.log("error", error));
    }


    const renderLobbies = () => (
        //{lobbies.map(lobby =>(
        <>
            {

                lobbies.filter(lobby => lobby.id >= 0).map((lobby) => (
                    <LobbyListItem
                        key={lobby.id}
                        id={lobby.id}
                        name={lobby.name}
                        playersCount={lobby.playersCount}
                        maxPlayers={lobby.maxPlayers}
                        isPrivate={lobby.isPrivate}
                        host={lobby.host}

                    />
                )
                )}
        </>
    );

    function handleChange(event) {
        event.persist();
        setSearchText(event.target.value);
    }



    useEffect(() => {
        console.log("Search message inside useEffect: ", searchText);
        searchLobbies();

    }, [searchText]);

    useEffect(() => {
        renderLobbies()

    }, [lobbies]);

    function searchLobbies() {
        lobbies.forEach((lobby) => {
            if (lobby.id.toString().includes(searchText) || lobby.name.toLowerCase().includes(searchText.toLowerCase())) {
                console.log("est takoe lobbi")
            }

        });

    }

    return (
        <div className="Wrapper-submenu" >
            <div className="Submenu-box" id="SearchMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Find a Lobby</h1>
                </div>
                <div className="Submenu-content">
                    <div className="Lobbies">
                        <div className="Lobby-list-header">
                            <div className="Lobby-list-header-content">
                            <div className="Lobby-search SearchTextField">
                            <SearchTextField
                                id="standard-basic"
                                name="name"
                                onChange={handleChange}
                                autoComplete="off"
                                label="Lobby's name"
                                variant="outlined"

                                placeholder="Lobby's name goes here"

                                >
                            </SearchTextField>
                            </div>
                            <div className="Button-container">
                                {/* 
                                <SimpleButton text="">
                                    {<i class="fa-solid fa-sliders"></i>}
                                </SimpleButton>
                                */}
                                <SimpleButton text="" onClick={() => {getLobbies();}}>
                                    {<i class="fa-solid fa-arrows-rotate"></i>}
                                </SimpleButton>
                            </div>
                            </div>

   


                        </div>

                        <div className="Lobby-list-content">

                            {renderLobbies()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function returnToMainMenu() {
        console.log("RETURN PRESSED!");
        navigate("/");
    }
}

export default SearchMenu;
