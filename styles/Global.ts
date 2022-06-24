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
    h2,
    h3,
    h4{
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
`