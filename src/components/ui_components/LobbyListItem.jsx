import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {
    BrowserRouter as Router,
    generatePath,
    Routes,
    Route,
    useNavigate,
    useParams,
  } from "react-router-dom";

function LobbyListItem(lobby) {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    function connectToLobby(lobby){

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

        fetch(`http://25.74.83.186:8080/api/lobby/join/${lobby.id}`, dataOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                const wsUrl=result;
                const id = lobby.id;
                
                //navigate(generatePath("/lobby/:id", {id, wsUrl}));
                const url= generatePath("/lobby/:id", {id})
                navigate(url, { state: {wsUrl}});   
            })
            .catch((error) => console.log("error", error));

            
    }

    return (
        <div className={"Lobby-item"} id={lobby.id}>
            <div className="Title">{lobby.name}</div>
            <div className="Player-count">{lobby.playersCount}/{lobby.maxPlayers} 🙂</div>
            <div className="With-password">{lobby.private ? "🔒" : "🔓"}</div>
            <Button onClick={handleOpen}>Join</Button>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {lobby.name.toUpperCase()} BY {lobby.host.username.toUpperCase()}
                    </Typography>
                    <div></div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Pls help
                    </Typography>
                    <Button onClick={()=>{connectToLobby(lobby)}}>Join</Button>
                </Box>
            </Modal>
        </div>)
}

export default LobbyListItem;