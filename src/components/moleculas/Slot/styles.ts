import styled from 'styled-components'

interface Props{
    /*height: string,
    width: string*/
}

export const Container = styled.div<Props>`
    height:200px;
    width:200px;
    background-color:#333;
    font-size: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`   