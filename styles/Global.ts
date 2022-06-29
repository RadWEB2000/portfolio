import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&family=Staatliches&display=swap');
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    ::selection{
        background-color:${({theme}) => theme.colors.color};
        color:${({theme}) => theme.colors.background};
    }
    a{
        color:inherit;
        outline:none;
        text-decoration:none;
    }
    body{
        background-color:${({theme}) => theme.colors.background};
        color:${({theme}) => theme.colors.color};
        font-family:${({theme}) => theme.fonts.family.regular};
        font-size:1.6rem;
        font-weight:400;
    }
    button{
        all:unset;
        cursor:pointer;
    }
    figure{
        position:relative;
    }
    h1,
    h2{
        font-family:${({theme}) => theme.fonts.family.heading};
    }
    html{
        font-size:62.5%;
    }
    input{
        all:unset;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
    .wrapper {
        display:grid;
        grid-template-columns:3fr 2fr;
        & > .cell{
            align-items:flex-start;
            display:flex;
            justify-content:center;
            position:relative;
            width:100%;
        }
        @media only screen {
            @media (max-width:1450px){
                grid-template-columns:51% 49%;
            }
            @media (max-width:1100px){
                grid-template-columns:46% 54%;
            }
            @media (max-width:990px){
                grid-template-columns:44% 56%;
            }
            @media (max-width:905px){
                grid-template-columns:1fr;
            }
            @media (max-width:600px){
                display:flex;
                flex-flow:column;
                grid-template-columns:1fr;
            }
        }
    }
`