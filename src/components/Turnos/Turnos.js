import React from 'react';

function Turnos(turnos) {
    let turns = turnos.turnos;
    return (
        <>
            {turns.map((turno)=>(<p key={turno.id}>{turno.Dia} a las {turno.Hora}hs</p>))}
        </>
    )
}

export default Turnos;
