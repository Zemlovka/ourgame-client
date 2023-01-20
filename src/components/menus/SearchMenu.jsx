import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import LobbyListItem from "../ui_components/LobbyListItem";

import { IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';


import { Skeleton, TextField } from "@mui/material";



import { useNavigate } from "react-router-dom";

function SearchMenu() {
    const navigate = useNavigate();


    const [isLoading, setIsLoading] = useState(false);

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
                setIsLoading(false);
            })
            .catch((error) => console.log("error", error));
    }


    const renderLobbies = () => (
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
                    /*
                   <Skeleton height={100} animation="wave"></Skeleton>
                   */
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
        //searchLobbies();
    }, [searchText]);

    /*
    useEffect(() => {
        renderLobbies()

    }, [searchedLobbies]);
    */

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
                            {/* 
                            <SimpleInput
                                placeholder="Search by name"
                                onChange={handleChange}
                            ></SimpleInput>
                            */}
                            <TextField
                                id="standard-basic"
                                name="name"
                                onChange={handleChange}
                                autoComplete="off"
                                label="Lobby's name"
                                variant="outlined"
                                color='primary'
                                sx={{
                                    fieldset: {
                                        //borderColor: "#6832E3",
                                        color: 'white',
                                        border: '2px solid #6832E3'

                                    },
                                    'input': {
                                        '&::placeholder': {
                                            color: 'white !important'
                                        }

                                    }
                                }}
                            >
                            </TextField>
                            <IconButton color="primary" aria-label="refresh lobbies" onClick={()=>{getLobbies()}}>
                                <RefreshIcon />
                            </IconButton>
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
