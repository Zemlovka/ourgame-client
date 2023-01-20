import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import LobbyListItem from "../ui_components/LobbyListItem";


import { TextField } from "@mui/material";
import SearchTextField from "../ui_components/SearchTextField";


import { useNavigate } from "react-router-dom";

function SearchMenu() {
    const navigate = useNavigate();

    let [lobbies, setLobbies] = useState([]);
    let [searchedLobbies, setSearchedLobbies] = useState([]);
    let [searchText, setSearchText] = useState("");

    function getLobbiesJson() {
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
                lobbies.map((lobby) => (
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

    }, [searchedLobbies]);

    useEffect(() => {
        renderLobbies()

    }, [lobbies]);

    function searchLobbies() {

        let searchedLobbies = [];

        lobbies.forEach((lobby) => {
            if (lobby.id.toString().includes(searchText) || lobby.name.toLowerCase().includes(searchText.toLowerCase())) {
                //console.log("est takoe lobbi "+lobby.id);
                searchedLobbies.push(lobby);
            }
            //searchedLobbies.filter(lobby => !(lobby.id.toString().includes(searchText)));
            setSearchedLobbies(searchedLobbies);
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

                            <SearchTextField
                                id="standard-basic"
                                name="name"
                                autoComplete="off"
                                label="Lobby's name"
                                variant="outlined"
                                placeholder="Lobby's name goes here"

                                >
                            </SearchTextField>
                            
                            <div className="Button-container">
                                <SimpleButton text="">
                                    {<i class="fa-solid fa-sliders"></i>}
                                </SimpleButton>
                                <SimpleButton text="" onClick={() => {getLobbiesJson();}}>
                                    {<i class="fa-solid fa-arrows-rotate"></i>}
                                </SimpleButton>
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
