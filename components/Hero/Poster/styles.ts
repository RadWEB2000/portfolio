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
        @media (max-width:700px){
            align-items:center;
            display:flex;
            min-height:auto;
            grid-column:1/-1;
            background-color:red;
            margin:auto;
            justify-content:center;
            & > figure{
                aspect-ratio:1/1;
                border-radius:50%;
                flex-shrink:0;
                overflow:hidden;
                max-width:95%;
                width:28rem;
            }
        }
        @media (max-width:250px){
            & > figure{
                width:18rem;
            }
        }
    }
`