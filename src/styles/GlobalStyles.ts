import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Open Sans'
    }

    html,body,#root{
        height:100vh;
    }

    input:focus,button:focus{
        outline:0;
    }

`