import styled from 'styled-components';
interface size {
    size:number;
}
export const Wrapper = styled.div<size>`
    position:sticky;
    top:1rem;
    max-width:100%;
    & > ul{
        align-items:baseline;
        display:grid;
        grid-template-columns:repeat(${({size}) => size},1fr);
        margin:5rem auto 0;
        justify-items:center;
        width:90%;
        & > * {
            background:black;
        }
    }
    @media only screen {
        @media (max-width:1450px){
            max-width:80%;
            & > ul{
                margin:1rem auto 0;
            }
        }
        @media (max-width:1250px){
            max-width:95%;
        }
        @media (max-width:550px){
            & > ul{
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`
