import styled from 'styled-components';
export const Wrapper = styled.footer`
    background-color:${({theme}) => theme.colors.color};
    &,
    & > p{
        width:100%;
    }
    & > p{
        color:${({theme}) => theme.colors.tertiary};
        font-size:1.5rem;
        font-weight:700;
        line-height:3;
        text-align:center;
        word-break:break-all;
        word-wrap:break-word;
    }
`