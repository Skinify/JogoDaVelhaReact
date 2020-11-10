import React, { useState, useEffect } from 'react'
import Slot, {ISlot} from '../../moleculas/Slot'

import config from '../../../config/gerais'
import padraoVitoria from '../../../config/padraoVitoria'

import {Container} from './styles'

const Slots: React.FC = () => {

    const [slots, setSlots] = useState<Array<ISlot>>([]);
    const [sinal, setSinal] = useState<number>(config.SINAIS.PRIMEIRO_SINAL);
    const [rodada, setRodada] = useState<number>(1);
    const [fimJogo, setFimJogo] = useState<Boolean>(false);

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
                conteudo:config.SINAIS.NULO,
                click: function(){},
                vencedor:false
            }
            todosSlots.push(novoSlot)
            count++;
        }
        setSlots(todosSlots);
    }

    const toggleSlot = (id:number) => {
        if(!fimJogo){
            let novosSlots = [...slots];
            if(!novosSlots[id].ativo){
                novosSlots[id].ativo = true;
                novosSlots[id].conteudo = sinal;
                novosSlots[id].vencedor = false;
                setSlots(novosSlots);
                setRodada(rodada+1)
                variarSinal();
                if(rodada > 4){
                    verificarVitoria();
                }
            }
        }
    }

    const variarSinal = () =>{
        if(sinal === config.SINAIS.SEGUNDO_SINAL){
            setSinal(config.SINAIS.PRIMEIRO_SINAL)
        }else{
            setSinal(config.SINAIS.SEGUNDO_SINAL)
        }
    }
    
    const verificarVitoria = () => {
        let slotsPrimeiroSinal:Array<number> = []
        let slotsSegundoSinal:Array<number> = []
        slots.map(slot => {
            if(slot.conteudo !== config.SINAIS.NULO){
                if(slot.conteudo === config.SINAIS.PRIMEIRO_SINAL){
                    slotsPrimeiroSinal.push(slot.id)
                }else{
                    slotsSegundoSinal.push(slot.id)
                }
            }
        })
        let valorPrimeiroSinal = 0;
        let valorSegundoSinal = 0;
        Object.keys(padraoVitoria).map(key => {
            (padraoVitoria as any)[key].map((valor: number) => {
                if(slotsPrimeiroSinal.includes(valor)){
                    valorPrimeiroSinal++;
                    if(valorPrimeiroSinal > 2){
                        anunciarVencedor((padraoVitoria as any)[key], config.PRIMEIRO_JOGADOR);
                        return;
                    }
                }   
                if(slotsSegundoSinal.includes(valor)){
                    valorSegundoSinal++;
                    if(valorSegundoSinal > 2){
                        anunciarVencedor((padraoVitoria as any)[key], config.SEGUNDO_JOGADOR);
                        return;
                    }
                }
            })
            valorPrimeiroSinal = 0;
            valorSegundoSinal = 0;
        })
    }

    const anunciarVencedor = (slotsPreenchidos:Array<number>, vencedor:number ) =>{
        let novos = [...slots];
        novos.map(slot => {
            if(slotsPreenchidos.includes(slot.id)){
                slot.vencedor = true;
            }
        })
        setFimJogo(true);
        setSlots(novos);

        /*switch(vencedor){
            case config.PRIMEIRO_JOGADOR: {
                alert("Primeiro jogador venceu")
                break
            }
            case config.SEGUNDO_JOGADOR: {
                alert("Segundo jogador venceu")
                break
            }
        }*/

    }

    return(
        <Container>
            {slots?.map((slot) => {
                return(
                    <Slot key={slot.id} id={slot.id} ativo={slot.ativo} conteudo={slot.conteudo} vencedor={slot.vencedor} click={toggleSlot}></Slot>
                )
            })}
        </Container>
    )
}

export default Slots;