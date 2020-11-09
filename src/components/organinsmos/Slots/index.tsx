import { platform } from 'os'
import React, { useState, useEffect } from 'react'
import Slot from '../../moleculas/Slot'
import {ISlot} from '../../moleculas/Slot'
import config from '../../../config/sinais'
import {Container} from './styles'

const Slots: React.FC = () => {

    const [slots, setSlots] = useState<Array<ISlot>>([]);
    const [sinal, setSinal] = useState<number>(1);

    useEffect(()=>{
        inicializar();
    }, [])

    const inicializar = function(){

        let todosSlots: Array<ISlot> = [];
        let count = 0;

        while(count < 9){
            let novoSlot: ISlot = {
                id:count,
                ativo:false,
                conteudo:0,
                click: function(){}
            }
            todosSlots.push(novoSlot)
            count++;
        }
        setSlots(todosSlots);
    }

    const toggleSlot = (id:number) => {
        let novosSlots = [...slots];
        if(!novosSlots[id].ativo){
            novosSlots[id].ativo = true;
            novosSlots[id].conteudo = sinal;
            setSlots(novosSlots);
            variarSinal();
        }
    }

    const variarSinal = () =>{
        if(sinal == config.SegundoSinal){
            setSinal(config.PrimereiroSinal)
        }else{
            setSinal(config.SegundoSinal)
        }
    }

    return(
        <Container>
            {slots?.map((slot) => {
                return(
                    <Slot key={slot.id} id={slot.id} ativo={slot.ativo} conteudo={slot.conteudo} click={toggleSlot}></Slot>
                )
            })}
        </Container>
    )
}

export default Slots;