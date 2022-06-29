import styled from 'styled-components';
export const Wrapper = styled.section`
    align-items:center;
    display:flex;
    flex-flow:column;
    max-width:85%;
    margin:1rem auto;
    row-gap:.85rem;
    width:87rem;
    & > h2{
        font-size:7rem;
    }
    & > p{
        color:${({theme}) => theme.colors.gray};
        font-size:2rem;
        line-height:2;
        text-align:end;
    }
    @media only screen {
        @media (max-width:1450px){
            & > h2{
                font-size:4.2rem;
            }
            & > p{
                font-size:1.65rem;
                line-height:1.7;
            }
        }
        @media (max-width:700px){
            & > h2{
                font-size:3.2rem;
                text-align:center;
            }
            & > p{
                font-size:1.55rem;
                line-height:1.7;
                text-align:center;
            }
        }
        @media (max-width:330px){
            & > h2{
                font-size:2.7rem;
            }
            & > p{
                font-size:1.4rem;
                line-height:1.4;
            }
        }
    }
`