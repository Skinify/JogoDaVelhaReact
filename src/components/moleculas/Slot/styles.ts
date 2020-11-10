import styled from 'styled-components'

export const Container = styled.div`
    height:200px;
    width:200px;
    background-color:#333;
    font-size: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`   

export const SinalDiv = styled.div<{vencedor:Boolean}>`
    @keyframes piscar {
        0% {filter:opacity(1)}
        50%{filter:opacity(0)}
        100% {filter:opacity(1)}
    }

    display:flex;
    animation-name:${(props) => props.vencedor == true ? "piscar" : "none"};
    animation-duration: .5s;
    animation-iteration-count:3;

`