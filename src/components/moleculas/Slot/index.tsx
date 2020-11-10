import React from 'react'
import {Container, SinalDiv} from './styles'
import {BsCircle, BsCircleFill} from 'react-icons/bs'

import config from '../../../config/gerais'

export interface ISlot{
    id: number,
    ativo: Boolean,
    conteudo: number,
    click: Function,
    vencedor:Boolean
}

const Slot: React.FC<ISlot> = ({id,ativo,conteudo,click, vencedor}) => {
    const exibir = () => {
        var cor:string = vencedor ? config.COR_VENCEDOR : "black";
        if(conteudo){
            switch(conteudo){
                case config.SINAIS.NULO:{
                    return ''
                }
                case config.SINAIS.PRIMEIRO_SINAL:{
                    return <BsCircle color={cor}/>;
                }
                case config.SINAIS.SEGUNDO_SINAL:{
                    return <BsCircleFill color={cor}/>;
                }
            }
        }
    }

    return(
        <Container onClick={() => click(id)}>
            <SinalDiv vencedor={vencedor}>
                {exibir()}
            </SinalDiv>
        </Container>
    );
}

export default Slot;