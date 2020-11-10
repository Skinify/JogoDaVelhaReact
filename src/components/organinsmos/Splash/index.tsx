import React from 'react'
import {Container, TituloSuperior, TituloInferior, Row} from './styles'
import {BsCircle, BsCircleFill} from 'react-icons/bs'

const Splash:React.FC = ({children}) => {
    return(
        <Container>
            <Row><BsCircle size={20} color="#efefef"/><TituloSuperior>jogo da</TituloSuperior><BsCircleFill color="#efefef" size={20} /></Row>
            <Row style={{ justifyContent:"center"}}><TituloInferior>VELHA</TituloInferior></Row>
        </Container>
    )
}

export default Splash;