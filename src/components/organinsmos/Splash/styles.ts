import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:500px;
    margin:auto;
    position:relative;
`

export const TituloSuperior = styled.a`
    font-size:40px;
    letter-spacing:15px;
    font-weight:lighter;
    text-transform:uppercase;
    padding:12px 24px;
    color:#efefef;
`

export const TituloInferior = styled.a`
    font-size:100px;
    font-weight:bold;
    letter-spacing:30px;
    color:#db4040;
    text-transform:uppercase;
    letter-spacing:-5px;
    margin-top:-40px;
`

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    filter:opacity(0.8);
    width:100%;
`