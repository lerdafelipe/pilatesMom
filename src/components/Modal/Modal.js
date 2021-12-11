import React from "react";
//Material UI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//Material UI components
//own styles
import './index.css';
//Component form of the person who make the reservation
import Form from "../Form/Form";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #08abc0",
  borderRadius: 8,
  boxShadow: 24,
  justifyContent: "center",
  p: 4
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  //Open the modal
  const handleOpen = () => setOpen(true);
  //Close the modal
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="buttonModal" onClick={handleOpen}>Continuar</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Completa la reserva con tus datos
          </Typography>
          <Form/>
        </Box>
      </Modal>
    </div>
  );
}
