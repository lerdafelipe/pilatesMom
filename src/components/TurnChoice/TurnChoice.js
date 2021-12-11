import React, {useContext} from 'react';
//own styles
import './index.css';
//Context
import { TurnContext } from '../../context/TurnContext';
//Component modal
import BasicModal from '../Modal/Modal';

const TurnChoice =()=> {
    const {TurnItems/*, setTurnItems*/} = useContext(TurnContext);

    /*ERROR double rendering
    const eliminar = (id)=>{
        setTurnItems(TurnItems.filter((item)=> item.id !== id))
    };
    <button className="BtnDelete" onClick={eliminar(item.id)} type="button"> X </button>*/

        return (
            (TurnItems.length>0)?
            (<div className="shower">
                {TurnItems.map(item=>{
                    return (
                        <div className="turno-div" key={item.id}>
                            <p>{item.Dia} a las {item.Hora}hs</p>
                        </div>
                    )
                })}
                <BasicModal/>
            </div>) : null
        )
}

export default TurnChoice;
