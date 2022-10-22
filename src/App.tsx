import React from 'react';

import {AppContainer} from "./styles";
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";

export const App =()=> {
    return (
            <AppContainer>
                 <Column text={"Todo:"}/>
              <AddNewItem onAdd={()=>console.log('Lulu')} toggleButtonText={"+ Add another list"}></AddNewItem>
            </AppContainer>
            )
}


