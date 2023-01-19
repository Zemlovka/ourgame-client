import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import LobbyListItem from "../ui_components/LobbyListItem";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Slider from "@mui/material/Slider";
import { TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

function HostLobbyMenu() {
  const navigate = useNavigate();

  function valuetext(value) {
    return `${value}`;
  }

  const [maxPeople, setMaxPeople] = React.useState(3);

  const handleChange = (event, newValue) => {
    setMaxPeople(newValue);
  };

  const createTheGame = () => {
    console.log("create")
  };

  return (
    <div className="Wrapper-submenu">
      <div className="Submenu-box">
        <div className="Submenu-header">
          <ReturnButton onClick={returnToMainMenu}></ReturnButton>
          <h1>Host a lobby</h1>
        </div>
        <div className="Submenu-content" id="HostLobby">
          <div className="Host-form">
            <div className="Host-input-container">
              <TextField
                id="standard-basic"
                label="Lobby's name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Lobby's password (leave blank if there's not)"
                variant="standard"
              />
            </div>
            {/* 
                        <Button
                            id="Host-upload-button"
                            variant="outlined"
                            component="label"
                        >
                            Load a custom question pack
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
            */}
            <div className="Host-slider-container">
              <Typography id="non-linear-slider" gutterBottom>
                Max people: {maxPeople}
              </Typography>
              <div className="Host-slider">
                <Slider
                  onChange={handleChange}
                  aria-label="Small steps"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  step={1}
                  marks
                  min={1}
                  max={6}
                  valueLabelDisplay="auto"
                />
              </div>
            </div>
            <Button variant="contained" onClick={createTheGame}>Create the game!</Button>
          </div>
          <div>
            <h2>OR</h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );

  function returnToMainMenu() {
    console.log("RETURN PRESSED!");
    navigate("/");
  }
}

export default HostLobbyMenu;
