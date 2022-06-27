import styled from 'styled-components';
export const Wrappper = styled.div`
    flex-flow:column;
    grid-column:7/13;
    &,
    & > ul,
    & > ul > a{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > section {
        padding:.45rem; 
        & > h1{
            font-size:6.2rem;
        }
        & > p{
            color:${({theme}) => theme.colors.gray};
            font-size:1.9rem;
            line-height:2;
            text-align:end;
        }
    }
    & > ul{
        gap:.85rem;
        margin:2rem auto;
        & > li{
            & > a{
                background-color:${({theme}) => theme.colors.color};
                clip-path: polygon(100% 0, 100% 80%, 80% 100%, 0 100%, 0 0);
                color:${({theme}) => theme.colors.background};
                font-size:2.5rem;
                font-weight:700;
                padding:.85rem 2.5rem;
                position:relative;
                text-transform:uppercase;
                transition:.12s linear background-color,.12s linear color;
                &::before{
                    bottom:0rem;
                    background-color:${({theme}) => theme.colors.secondary};
                    left:0;
                    height:.5rem;
                    transition:.2s .12s linear width;
                    width:0%;
                }
                &:focus,
                &:hover{
                    background-color:${({theme}) => theme.colors.background};
                    color:${({theme}) => theme.colors.secondary};
                    &::before{
                        width:100%;
                    }
                }
            }
        }
    }
    @media only screen {
        @media (max-width:1050px){
            grid-column:6/13;
            & > section {
                & > h1{
                    font-size:4.2rem;
                }
                & > p{
                    font-size:1.65rem;
                    line-height:1.7;
                }
            }
            & > ul{
                & > li{
                    & > a{
                        font-size:2.15rem;
                        padding:.65rem 1.75rem;
                    }
                }
            }
        }
        @media (max-width:700px){
            grid-column:1/-1;
            margin:auto;
            width:95%;
            & > section {
                & > h1{
                    font-size:3.2rem;
                    text-align:center;
                }
                & > p{
                    font-size:1.55rem;
                    line-height:1.7;
                    text-align:center;
                }
            }
            & > ul{
                gap:.85rem;
                margin:1rem auto;
                & > li{
                    & > a{
                        font-size:1.8rem;
                        padding:.75rem 1.85rem;
                    }
                }
            }
        }
        @media (max-width:400px){
            width:99%;
        }
        @media (max-width:330px){
            & > section {
                & > h1{
                    font-size:2.7rem;
                }
                & > p{
                    font-size:1.4rem;
                    line-height:1.4;
                }
            }
        }
    }
`