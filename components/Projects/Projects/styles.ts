import styled from 'styled-components';
export const Wrapper = styled.div`
    margin:8rem auto 0;
    & > ul{
        align-items:start;
        background-color:${({theme}) => theme.colors.color};
        display:flex;
        gap:.85rem;
        flex-flow:row wrap;
        justify-content:center;
        margin:4rem auto 0;
        padding:.15rem;
    }
`