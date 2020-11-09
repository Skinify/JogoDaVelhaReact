import React from 'react'
import {Container} from './styles'
import {BsCircle, BsCircleFill} from 'react-icons/bs'
import config from '../../../config/sinais'

export interface ISlot{
    id: number,
    ativo: Boolean,
    conteudo: number,
    click: Function
}

const Slot: React.FC<ISlot> = ({id,ativo,conteudo,click}) => {
    const exibir = () => {
        if(conteudo){
            switch(conteudo){
                case config.Nulo:{
                    return ''
                }
                case config.PrimereiroSinal:{
                    return <BsCircle/>;
                }
                case config.SegundoSinal:{
                    return <BsCircleFill/>;
                }
            }
        }
    }

    return(
        <Container onClick={() => click(id)}>
            {exibir()}
        </Container>
    );
}

export default Slot;