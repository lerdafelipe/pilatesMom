import React, {useContext} from "react";
//Components from Metrial UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//Importing the database access
import { db } from '../../firebase/firebase';
//Context
import { TurnContext } from '../../context/TurnContext';
//Import library formik
import {useFormik} from 'formik';

const Form = () => {
    const {TurnItems, setTurnItems} = useContext(TurnContext);

    //Uing Formik to send the form data
    const formik = useFormik({
        initialValues:{
          name: '',
          email: '',
          dni: '',
          phone: ''
        },
        onSubmit: (persona)=>{
          //Date of the reservation
          let f = new Date()
          //Model of the reservation
          const reserva = {'persona': persona, 'turnos': TurnItems, 'time': f};
          //accessing to the collection of the reservations avaiables
          const turnos = db.collection('turnos');
          //Deleting the reservations from de DB
          for(let el of TurnItems){
              turnos.doc(el.id).delete().then(()=>console.log('Okk delete'))
          }
          //accessing to  the collect of reservations mades
          const reservas = db.collection('reservas');
          //Sending the reservation to the DB
          reservas.add(reserva)
            .then(console.log('Okk'))
            .then(()=>{setTurnItems([])});
        }
      })
    

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box
                sx={{"& .MuiTextField-root": { m: 1, width: "25ch" }}}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    required
                    id=""
                    label="Nombre y Apellido"
                    name= 'name'
                    onChange={formik.handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name= 'email'
                    onChange={formik.handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="DNI"
                    name= 'dni'
                    onChange={formik.handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Teléfono"
                    name= 'phone'
                    onChange={formik.handleChange}
                />
                <button className="btnEnd" type="submit">Enviar Reserva</button>
            </Box>
        </form>
    )
}

export default Form;
