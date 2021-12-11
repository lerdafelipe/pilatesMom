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
//Accessing to DB
import { db } from '../../firebase/firebase';
//own styles
import './index.css';

const TableTurns = () => {
    const [turnos, setTurnos] = useState([]);

    //Getting reservations from the collection productos at firestore
    const getTurnos = ()=>{
        db.collection('turnos').onSnapshot((querySnapshot)=>{
            const docs = [];
            //Pushing info at array docs
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            setTurnos(docs);
        })
    }

    //Funtion to delete the reservation avaiables from the DB
    const deleteTurn = (e)=>{
        let id = e.target.id;
        const turnos = db.collection('turnos');
        turnos.doc(id).delete().then(()=>console.log('Okk delete'));
    }

    useEffect(() => {
        getTurnos();
    }, []);

    return (
        <div className="FormAdminContainer">
            <h4 className="FormAdminTitle">Turnos disponibles</h4>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dia</TableCell>
                            <TableCell align="right">Hora</TableCell>
                            <TableCell align="right" style={{maxWidth: "80px", padding: "0"}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {turnos.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.Dia}</TableCell>
                            <TableCell align="right">{row.Hora}</TableCell>
                            <TableCell align="right" style={{maxWidth: "80px"}}><button id={row.id} type="button" onClick={deleteTurn} className="btnDelete">Eliminar</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <hr/>
        </div>
    )
}

export default TableTurns;
