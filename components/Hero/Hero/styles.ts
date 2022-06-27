import styled from 'styled-components';
export const Wrapper = styled.header`
    display:grid;
    grid-template-columns:repeat(12,1fr);
    margin:0 auto;
    width:85%;
    @media only screen {
        @media (max-width:1050px){
            width:95%;
        }
        @media (max-width:400px){
            width:99%;
        }
    }
`