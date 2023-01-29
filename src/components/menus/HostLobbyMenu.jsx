import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import CustomButton from "../../components_mui_based/CustomButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import LobbyListItem from "../ui_components/LobbyListItem";
import CustomCircleButton from "../../components_mui_based/CustomCircleButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Slider from "@mui/material/Slider";
import CustomSlider from "../../components_mui_based/CustomSlider";

import { TextField } from "@mui/material";

import CreateTextField from "../../components_mui_based/CreateTextField";

import { useNavigate } from "react-router-dom";

function HostLobbyMenu() {
  const navigate = useNavigate();

  function valuetext(value) {
    return `${value}`;
  }
  const initialValues = {
    name: "",
    password: "",
    maxPeople: 3,
  };

  /*
  const [maxPeople, setMaxPeople] = React.useState(3);
  const [lobbyName, setLobbyName] = React.useState("");
  const [lobbyPassword, setLobbyPassword] = React.useState("");
  const [isPrivate, setIsPrivate] = React.useState(false);
  */
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

/*
  const handleChange = (event, newValue) => {
    setMaxPeople(newValue);
  };
  */


  const createTheGame = () => {
    console.log("create")
    console.log(values);
/*
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
            method: "POST",
            headers: dataHeader,
            redirect: "follow",
        };

        fetch("http://25.74.83.186:8080/api/lobby/create", dataOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
            })
            .catch((error) => console.log("error", error));
            */
  };

  return (
    <div className="Wrapper-submenu">
      <div className="Submenu-box">
        <div className="Submenu-header">
          <CustomCircleButton fontSize="1.5rem" diameter="42px" onClick={returnToMainMenu}>
            <i className="fa-sharp fa-solid fa-angle-left"></i>
          </CustomCircleButton>
          <h1>Host a lobby</h1>
        </div>
        <div className="Submenu-content" id="HostLobby">
          <div className="Host-form">
            <form className="Host-input-container">
              <CreateTextField
                id="standard-basic"
                name="name"
                autoComplete="off"
                  onChange={handleInputChange}
                label="Lobby's name"
                variant="standard"
                /* Error Example */
                error={ values["name"].includes("!") ? true: false}
                helperText={ values["name"].includes("!") ? "No Exclamation Marks": " "}
          

              />
              <CreateTextField
                id="standard-basic"
                name="password"
                autoComplete="off"
                type="password"
                onChange={handleInputChange}
                label="Lobby's password"
                variant="standard"
                /* Error Example */
                error={ values["password"].includes("!") ? true: false}
                helperText={ values["password"].includes("!") ? "No Exclamation Marks": "Leave blank if there's not"}
              />
            </form>
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
                Max players: {values.maxPeople}
              </Typography>
              <div className="Host-slider">
                <div>1</div>
                <CustomSlider
                  name="maxPeople"
                  onChange={handleInputChange}
                  aria-label="Small steps"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  step={1}
                  marks
                  min={1}
                  max={6}
                  valueLabelDisplay="auto"
                />
                <div>6</div>
              </div>
            </div>
            <CustomButton variant="contained"
                          onClick={createTheGame}>Create the game!
            </CustomButton>
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
