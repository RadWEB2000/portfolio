import styled from 'styled-components';
export const Wrapper = styled.div`
    margin:2rem auto;
    & > ul{
        align-items:start;
        background-color:${({theme}) => theme.colors.color};
        display:flex;
        gap:.85rem;
        flex-flow:row wrap;
        justify-content:center;
        padding:.15rem;
    }
`