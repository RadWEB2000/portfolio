import styled from 'styled-components';
export const Wrapper = styled.div`
    grid-column:1/6;
    min-height:85vh;
    & > figure{
        height:100%;
        transform:rotateY(180deg);
        width:100%;
    }
    @media only screen {
        @media (max-width:1050px){
            grid-column:1/5;
        }
    }
`