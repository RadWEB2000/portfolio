import styled from 'styled-components';
export const Wrapper = styled.section`
    align-items:center;
    display:flex;
    flex-flow:column;
    max-width:99%;
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
                font-size:4rem;
            }
            & > p{
                font-size:1.65rem;
                line-height:1.7;
            }
        }
        @media (max-width:1050px){
            & > h2{
                font-size:3.2rem;
            }
            & > p{
                font-size:1.45rem;
                line-height:1.7;
            }
        }
        @media (max-width:550px){
            text-align:center;
            & > h2{
                font-size:3.2rem;
            }
            & > p{
                font-size:1.45rem;
                line-height:1.7;
            }
        }
    }
`