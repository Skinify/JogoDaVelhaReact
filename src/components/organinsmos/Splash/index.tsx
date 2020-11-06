import React from 'react'
import {Container, Jogo, Velha} from './styles'

const Splash:React.FC = ({children}) => {
    return(
        <Container>
            <Jogo>Jogo da</Jogo>
            <Velha>Velha</Velha>
        </Container>
    )
}

export default Splash;