import React, {useState, useEffect} from 'react';
//Material UI components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//Material UI components
//Access to DB
import { db } from '../../firebase/firebase';
//own styles
import './index.css';
//Component child of reservation
import Turnos from '../Turnos/Turnos';

const TableRes = () => {
    const [reservas, setReservas] = useState([]);

    //Getting turnos from the collection productos at firestore
    const getReservas = ()=>{
        db.collection('reservas').onSnapshot((querySnapshot)=>{
            const docs = [];
            //Pushing info at array docs
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            setReservas(docs);
        })
    }

    //Funtion to delete the reservation from the DB
    const deleteRes = (e)=>{
        let id = e.target.id;
        const reservas = db.collection('reservas');
        reservas.doc(id).delete().then(()=>console.log('Okk delete'));
    }

    useEffect(() => {
        getReservas();
    }, []);

    return (
        <div className="FormAdminContainer">
            <h4 className="FormAdminTitle">Reservas</h4>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Persona</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Turnos</TableCell>
                            <TableCell align="right" style={{maxWidth: "80px", padding: "0"}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservas.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.persona.name}</TableCell>
                            <TableCell align="left">{row.persona.phone}</TableCell>
                            <TableCell align="left"><Turnos style={{width: "100%"}} turnos={row.turnos}/></TableCell>
                            <TableCell align="right" style={{maxWidth: "80px"}}><button id={row.id} type="button" onClick={deleteRes} className="btnDelete">Eliminar</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableRes;
