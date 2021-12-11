import React, {useEffect, useState, useContext} from 'react'
//own styles
import './index.css';
//import firestore/firebase
import { db } from '../../firebase/firebase';
//Context
import { TurnContext } from '../../context/TurnContext';
//Component of reservation selected
import TurnChoice from '../TurnChoice/TurnChoice';


const Selector =() =>{
    const [turnos, setTurnos] = useState([]);
    const [turnSelect, setTurnSelect] = useState(null);
    const {addTurn} = useContext(TurnContext);

    //Getting turnos from the collection productos at firestore of the collection 'turnos'
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

    //on change the selection, update the constant TurnSelected
    const Selection = (e)=>{
        let id = e.target.value;
        //If the option isn't the default value, we change the option selected
        if(id !== 'no-op'){
            let turnoSeleccionado = turnos.filter((elem)=> elem.id === id);
            setTurnSelect(turnoSeleccionado[0]);
        }
    }

    // On click the button, this function save the reservation selected on the context
    const addNewTurn = ()=>{
        addTurn(turnSelect);
        let newTurnos = turnos.filter(elem=> elem.id !== turnSelect.id);
        setTurnos(newTurnos);
    }

    useEffect(() => {
        getTurnos();
    }, []);


    return (
        <>
            <div className="selectorContainer">
                <div className="selector">
                    <select className="select-button" onChange={Selection}>
                        <option value="no-op">Turnos</option>
                        {turnos.map((turno)=>{
                            return(<option value={turno.id} key={turno.id}>{turno.Dia} a las {turno.Hora}hs</option>)
                        })}
                    </select>
                    <button type="button" onClick={addNewTurn} className="BtnAdd">Reservar turno</button>
                </div>
                <TurnChoice/>
            </div>
        </>
    )
}

export default Selector;