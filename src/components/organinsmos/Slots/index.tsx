import { platform } from 'os'
import React, { useState, useEffect } from 'react'
import Slot from '../../moleculas/Slot'
import {ISlot} from '../../moleculas/Slot'
import config from '../../../config/sinais'
import padraoVitoria from '../../../config/padraoVitoria'
import {Container} from './styles'

const Slots: React.FC = () => {

    const [slots, setSlots] = useState<Array<ISlot>>([]);
    const [sinal, setSinal] = useState<number>(config.PrimereiroSinal);
    const [rodada, setRodada] = useState<number>(1);

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
                conteudo:config.Nulo,
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
            setRodada(rodada+1)
            variarSinal();
            if(rodada > 4){
                verificarVitoria();
            }
        }
    }

    const variarSinal = () =>{
        if(sinal == config.SegundoSinal){
            setSinal(config.PrimereiroSinal)
        }else{
            setSinal(config.SegundoSinal)
        }
    }

    const verificarVitoria = () => {
        let slotsPrimeiroSinal:Array<number> = []
        let slotsSegundoSinal:Array<number> = []
        slots.map(slot => {
            if(slot.conteudo != config.Nulo){
                if(slot.conteudo == config.PrimereiroSinal){
                    slotsPrimeiroSinal.push(slot.id)
                }else{
                    slotsSegundoSinal.push(slot.id)
                }
            }
        })
        
        console.log(slotsPrimeiroSinal)
        console.log(slotsSegundoSinal)

        let valorPrimeiroSinal = 0;
        let valorSegundoSinal = 0;

        /*

        Object.keys(padraoVitoria).map(key => {
            (padraoVitoria as any)[key].map((valor: number) => {
                if(slotsPrimeiroSinal.includes(valor)){
                    valorPrimeiroSinal++;
                }   
                if(slotsSegundoSinal.includes(valor)){
                    valorSegundoSinal++;
                }
            })
            if(valorPrimeiroSinal > 2){
                alert("Primeiro player ganhoou")
                return;
            }
    
            if(valorSegundoSinal > 2){
                alert("Segundo player ganhoou")
                return;
            }
        })
*/

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