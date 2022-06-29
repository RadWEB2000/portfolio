import styled from 'styled-components';
export const Wrapper = styled.li`
    margin:2rem auto;
    width:70%;
    & > section{
        align-items:flex-start;
        display:flex;
        flex-flow:column;
        justify-content:center;
        row-gap:.85rem;
        & > *{
            width:100%;
        }
        & > h3{
            color:${({theme}) => theme.colors.primary};
            font-size:3rem;
            text-align:center;
        }
        & > p{
            padding:.45rem;
            &:first-of-type{
                color:${({theme}) => theme.colors.color};
                font-size:1.9rem;
                font-weight:700;
                line-height:2;
                text-align:end;
            }
            &:last-of-type{
                color:${({theme}) => theme.colors.gray};
                font-size:1.65rem;
                line-height:1.7;
                text-align:justify;
            }
        }
    }
    @media only screen {
        @media (max-width:1270px){
            & > section{
                & > h3{
                    font-size:2.4rem;
                }
                & > p{
                    padding:.45rem;
                    &:first-of-type{
                        color:${({theme}) => theme.colors.color};
                        font-size:1.5rem;
                        line-height:1.5;
                    }
                    &:last-of-type{
                        font-size:1.5rem;
                        line-height:1.7;
                    }
                }               
            }
        }
        @media (max-width:1100px){
            & > section{
                & > h3{
                    font-size:1.9rem;
                }
                & > p{
                    padding:.25rem;
                    &:first-of-type{
                        color:${({theme}) => theme.colors.color};
                        font-size:1.45rem;
                        line-height:1.35;
                    }
                    &:last-of-type{
                        font-size:1.4rem;
                        line-height:1.7;
                    }
                }               
            }
        }
        @media (max-width:500px){
            width:95%;
            background:pink;
            & > section{
                & > h3{
                    font-size:1.9rem;
                }
                & > p{
                    text-align:center !important;
                }               
            }
        }
    }
`