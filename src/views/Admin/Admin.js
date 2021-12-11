import React from 'react'
//Component form
import FormAdmin from '../../components/FormAdmin/FormAdmin';
//Component table of reservations
import TableRes from '../../components/TableRes/TableRes';
//Component Table of reservations avaiables
import TableTurns from '../../components/TableTurns/TableTurns';

const Admin =() =>{
    return (
        <>
            <div style={{width: "100vw", minHeight: "calc(100vh - 110px)", marginTop: "110px"}}>
                <FormAdmin/>
                <TableTurns/>
                <TableRes/>
            </div>
        </>
    )
}

export default Admin;