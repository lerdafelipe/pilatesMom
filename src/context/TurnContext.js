import React, {createContext, useState} from 'react';
//Exporting TurnContext
export const TurnContext = createContext();

//Creating and exporting The provider from TurnContext
export function TurnProvider({defaultValue = [], children}) {
    //Declaring the array of products in the Turn
    const [TurnItems, setTurnItems] = useState(defaultValue);

    //Function for remove items from Turn
    const removeTurn = (id)=>{
        setTurnItems (TurnItems.filter((item)=> item.id !== id));
    }


    //Function add item to the Turn context
    const addTurn = (item)=>{
        setTurnItems([...TurnItems, item]);
    };

    
    //exporting the functions from Turn provider
    return <TurnContext.Provider value={{addTurn, removeTurn, TurnItems, setTurnItems}}>{children}</TurnContext.Provider>
}