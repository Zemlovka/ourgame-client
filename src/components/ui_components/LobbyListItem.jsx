import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// 🔑🙂☹️

function LobbyListItem(lobby) {
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
                        {lobby.name} by {lobby.host.username}
                    </Typography>
                    <div></div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Button onClick={() =>{console.log("try to connect to "+lobby.id)}}>Join</Button>
                </Box>
            </Modal>
        </div>)
}

export default LobbyListItem;