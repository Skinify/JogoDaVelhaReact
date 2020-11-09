import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    max-width:1000px;
    margin:auto;
    position:relative;
`

export const TituloSuperior = styled.a`
    font-size:80px;
    letter-spacing:50px;
    font-weight:lighter;
    text-transform:uppercase;
    padding:12px 24px;
    color:#efefef;
`

export const TituloInferior = styled.a`
    font-size:300px;
    font-weight:bold;
    letter-spacing:30px;
    color:#db4040;
    text-transform:uppercase;
    margin-top:-100px;
    letter-spacing:-5px;
    margin-right: -40px;
`

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    filter:opacity(0.8);
    width:100%;
`