import React, { useState, useEffect } from 'react'
import Slot from '../../moleculas/Slot'
import {ISlot} from '../../moleculas/Slot'


const Slots: React.FC = () => {

    const [slots, setSlots] = useState<Array<ISlot>>([]);

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
                conteudo:'',
                click: function(){}
            }
            todosSlots.push(novoSlot)
            count++;
        }

        setSlots(todosSlots);
    }

    const toggleSlot = (id:number) => {
        console.log(id)
    }

    return(
        <>
            {slots?.map((slot) => {
                return(
                    <Slot key={slot.id} id={slot.id} ativo={slot.ativo} conteudo={slot.conteudo} click={toggleSlot}></Slot>
                )
            })}
        </>
    )
}

export default Slots;