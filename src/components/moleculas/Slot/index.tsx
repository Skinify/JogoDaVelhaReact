import React from 'react'
import {Container} from './styles'

export interface ISlot{
    id: number,
    ativo: Boolean,
    conteudo: string,
    click: Function
}


const Slot: React.FC<ISlot> = ({id,ativo,conteudo,click}) => {
    return(
        <Container onClick={() => click(id)}>
            
        </Container>
    );
}

export default Slot;