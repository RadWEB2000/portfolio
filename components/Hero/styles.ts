import styled from 'styled-components';
import { IntSocial } from '../../types/interface';
export const Wrapper = styled.header`
    display:grid;
    grid-gap:.25rem;
    grid-template-columns:1.8fr 2fr;
    height:auto;
    max-height:auto;
    min-height:95vh;
    padding:.25rem;
    & > div{
        &:first-of-type{
            align-items:center;
            display:flex;
            justify-content:center;
            & > figure{
                filter:saturate(45%) grayscale(65%);
                height:97%;
                max-width:95%;
                width:35rem;
            }
        }

        &:last-of-type{
            align-items:flex-end;
            display:grid;
            grid-template-columns:4fr 1fr;
            height:100%;
            justify-items:center;
        }

    }
    @media only screen{
        @media (max-width:1000px){
            min-height:99vh;
        }
        @media (max-width:800px){
            grid-template-columns:1.25fr 2fr;
        }
        @media (max-width:750px) and (orientation:portrait){
            align-items:center;
            display:flex;
            flex-flow:column;
            height:auto;
            justify-content:center;
            & > div{
                width:100%;
                &:first-of-type{
                    & > figure{
                        height:18rem;
                        width:90%;
                    }
                }
            }
        }
        @media (max-width:740px) and (orientation:landscape){
            grid-template-columns:.75fr 2fr;
            & > div{
                &:last-of-type{
                    align-items:center;
                }
            }
        }
        @media (max-width:660px) and (orientation:landscape){
            grid-template-columns:1fr 2fr;
            & > div{
                &:first-of-type{
                    & > figure{
                        width:95%;
                    }
                }
            }
        }
        @media (max-width:525px){
            & > div{
                &:first-of-type{
                    display:none;
                }
                &:last-of-type{
                    align-items:center;
                    grid-template-columns:5fr 1fr;
                    height:100%;
                }
            }
        }
        @media (max-width:350px){
            & > div{
                &:last-of-type{
                    flex-flow:column-reverse;
                    &,
                    & > ul{
                        align-items:center;
                        display:flex;
                    }
                    & > ul{
                        flex-flow:row wrap;
                        justify-content:center;
                        width:100%;
                    }
                }
            }
        }
    }
`

export const Content = styled.section`
    align-items:flex-start;
    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    row-gap:.65rem;
    padding:.85rem;
    & > h1{
        color:${({theme}) => theme.colors.primary};
        font-size:6rem;
    }
    & > p {
        color:${({theme}) => theme.colors.color};
        font-size:1.7rem;
        font-weight:700;
        line-height:1.8;
        text-align:start;
    }
    @media only screen{
        @media (max-width:1000px){
            & > h1{
                font-size:4rem;
            }
            & > p {
                font-size:1.65rem;
                font-weight:600;
                line-height:1.7;
            }
        }
        @media (max-width:350px){
            padding:.25rem;
            row-gap:.15rem;
            & > h1,
            & > p{
                text-align:center;
                width:100%;
            }
        
        }
        @media (max-width:710px) and (orientation:landscape) {
            & > h1{
                font-size:3rem;
            }
            & > p {
                font-size:1.6rem;
                font-weight:600;
                line-height:1.5;
            }
        }
        @media (max-width:300px){
            & > h1{
                font-size:3rem;
            }
            & > p {
                font-size:1.6rem;
                font-weight:600;
                line-height:1.5;
            }
        }
    }
`

export const Social = styled.li<IntSocial>`
    user-select:none;
    &,
    & > a{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a{
        font-size:2.5rem;
        color:${({theme}) => theme.colors.gray};
        height:3.5rem;
        transition:.2s linear color;
        width:3.5rem;
        & > *{
            transition:.2s linear transform;
        }
        &:focus,
        &:hover{
            color:${({color}) => color};
            & > *{
                transform:scale(1.1);
            }
        }
    }
`