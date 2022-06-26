import styled from 'styled-components';
export const Wrapper = styled.nav`
    grid-column:1/-1;
    height:5rem;
    & > menu {
        align-items:center;
        display:flex;
        flex-flow:row wrap;
        gap:.78rem;
        height:100%;
        justify-content:flex-end;
    }
`