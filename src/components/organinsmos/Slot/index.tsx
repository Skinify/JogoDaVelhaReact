import React from 'react'
import {Container} from './styles'

interface Props{
    lados:Array<string>
    tamanho: number,
    cor:string
}

const Slot: React.FC<Props> = ({lados,tamanho,cor}) => {
    return(
        <Container>
            
        </Container>
    );
}

export default Slot;