import styled from 'styled-components';
export const Wrapper = styled.li`
    max-width:92%;
    width:40rem;
    & > .image{
        aspect-ratio:16/9;
        overflow:hidden;
        width:100%;
        & > figure{
            height:100%;
            position:relative;
            transition:.2s .15s linear transform;
            width:100%;
        }
    }
    & > section{
        background-color:${({theme}) => theme.colors.color};
        color:${({theme}) => theme.colors.background};
        padding:.65rem 0;
        text-align:center;
        & > * {
            margin:.65rem auto;
        }
        & > h3{
            color:${({theme}) => theme.colors.quatenary};
            font-size:3rem;
        }
        & > ul {
            flex-flow:row wrap;
            gap:.75rem;
            &,
            & > li{
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > li {
                font-size:2.15rem;
                height:2.8rem;
                width:2.8rem;
            }
        }
        & > p {
            font-size:1.65rem;
            line-height:1.75;
            padding:.55rem .85rem;
        }
        & > div{
            &,
            & > a{
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > a{
                color:${({theme}) => theme.colors.quatenary};
                font-weight:700;
                padding:.95rem 1.5rem;
                position:relative;
                transition:.15s linear color;
                z-index:0;
                &::after,
                &::before{
                    background-color:${({theme}) => theme.colors.primary};
                    height:50%;
                    transition:.15s linear width;
                    width:0%;
                    z-index:-1;
                }
                &::after{
                    left:0;
                    top:0;
                }
                &::before{
                    bottom:0;
                    right:0;
                }
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.background};
                    &::after,
                    &::before{
                        width:100%;
                    }
                }
            }
        }
    }

    &:focus,
    &:hover{
        & > .image{
            & > figure{
                transform:scale(1.2);
            }
        }
    }
    @media only screen {
        @media (max-width:500px){
            & > section{
                & > h3{
                    color:${({theme}) => theme.colors.quatenary};
                    font-size:2.45rem;
                }
                & > ul {
                    & > li {
                        font-size:2rem;
                        height:2.2rem;
                        width:2.2rem;
                    }
                }
                & > p {
                    font-size:1.6rem;
                    line-height:1.75;
                    padding:.55rem .85rem;
                }
            }
        }
        @media (max-width:330px){
            & > section{
                & > h3{
                    font-size:2.45rem;
                }
                & > ul {
                    & > li {
                        font-size:2rem;
                        height:2.2rem;
                        width:2.2rem;
                    }
                }
                & > p {
                    font-size:1.4rem;
                    line-height:1.75;
                    padding:.15rem .9rem;
                }
            }
        }
        @media (max-width:240px){
            & > section{
                & > h3{
                    font-size:1.75rem;
                }
                & > ul {
                    & > li {
                        font-size:1.5rem;
                    }
                }
                & > p {
                    font-size:1.3rem;
                    line-height:1.6;
                    padding:.15rem .5rem;
                }
            }
        }
    }
`