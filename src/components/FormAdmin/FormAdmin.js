import React, {useState} from 'react';
//own Styles
import './index.css';
//Material UI Componets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
//Material UI Componets
//Importng the DB
import { db } from '../../firebase/firebase';
//Import library formik
import {useFormik} from 'formik';

//Days to the selector
const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
//Hours to the selector
let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];


const FormAdmin = () => {
    const [guardado, setGuardado] = useState(false)

    //Using formik to send the DATA
    const formik = useFormik({
        initialValues:{
            Dia: days[0],
            Hora: hours[7]
          },
        onSubmit: (Turno)=>{
            //Accessing to the database of reservations avaiables
          const turnos = db.collection('turnos');
          //Sending the new reservation to the collection of the DB
          turnos.add(Turno)
            .then(setGuardado(true))
        }
      })

    return (
        <div className="FormAdminContainer">
            <h4 className="FormAdminTitle">Agregar Turno</h4>
            <form onSubmit={formik.handleSubmit}>
            <Box
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <div className="inputs-div">
                    <TextField className="inputs"
                        id="filled-select-currency"
                        required
                        select
                        label="Seleccionar"
                        value={formik.values.Dia}
                        name='Dia'
                        onChange={formik.handleChange}
                        helperText="Seleccione el día"
                        variant="filled"
                    >
                        {days.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField className="inputs"
                        required
                        id="filled-select-currency"
                        select
                        label="Seleccionar"
                        name= 'Hora'
                        value={formik.values.Hora}
                        onChange={formik.handleChange}
                        helperText="Seleccione la hora"
                        variant="filled"
                    >
                        {hours.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}hs
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <button className="btnEnd" type="submit">Enviar Reserva</button>
            </Box>
        </form>
        {guardado ? (<Stack sx={{ width: '100%', marginTop: '15px' }} spacing={1}>
                        <Alert variant="outlined" severity="success">
                            ¡Turno guardado correctamente!
                        </Alert>
                    </Stack>) : null}
        
        <hr/>
            
        </div>
    )
}

export default FormAdmin;
