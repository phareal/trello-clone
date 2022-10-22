import {ColumnContainer,ColumnTitle, CardContainer} from "./styles";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";

type ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps) => {
     return (
             <ColumnContainer>
                 <ColumnTitle> {text} </ColumnTitle>
                 <Card text={"Generate app scaffold"}></Card>
                 <Card text={"Learn TypeScript"}></Card>
                 <Card text={"Begin to use static items "}></Card>
                 <AddNewItem onAdd={()=>console.log('Here')} toggleButtonText={"+ Add another list"} dark={true}></AddNewItem>
             </ColumnContainer>
     )
}