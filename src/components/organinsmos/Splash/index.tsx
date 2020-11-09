import React from 'react'
import {Container, TituloSuperior, TituloInferior, Row} from './styles'
import {BsCircle, BsCircleFill} from 'react-icons/bs'
import Icon from '../Icon'

const Splash:React.FC = ({children}) => {
    return(
        <Container>
            <Row><BsCircle size={50} color="#efefef"/><TituloSuperior>jogo da</TituloSuperior><BsCircleFill color="#efefef" size={50} /></Row>
            <Row style={{marginRight: -60}}><TituloInferior>VELHA</TituloInferior></Row>
        </Container>
    )
}

export default Splash;