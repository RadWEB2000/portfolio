import styled from 'styled-components';
interface value {
    value:number;
}
export const Wrapper = styled.li<value>`
    padding:.35rem .25rem;
    user-select:none;
    width:4.65rem;
    & > .skill{
        height:20rem;
        position:relative;
        width:100%;
        & > span{
            background-color:${({theme}) => theme.colors.background};
            border-radius:2rem;
            bottom:0;
            height:${({value}) => value}%;
            position:absolute;
            transition:.2s linear background-color;
            width:30%;
            margin:0 auto;
        }
    }
    & > .procent{
        color:${({theme}) => theme.colors.background};
        font-weight:500;
        margin:.85rem auto;
        text-align:center;
        transition:.2s linear color;
        & > p {
            font-size:1.35rem;
        }
    }
    & > .stack {
        aspect-ratio:1/1;
        width:100%;
        & > span{
            align-items:center;
            color:${({theme}) => theme.colors.background};
            display:flex;
            font-size:2.2rem;
            height:100%;
            justify-content:center;
            transition:.2s linear color;
            width:100%;
        }
    }
    &:focus,
    &:hover{
        & > .procent,
        & > .stack > span{
            color:${({theme}) => theme.colors.quatenary};
        }
        & > .skill > span{
            background-color:${({theme}) => theme.colors.quatenary};
        }
    }
    @media only screen {
        @media (min-width:550.5px){
            & > .skill{
                & > span{
                    left:50%;
                    transform:translateX(-50%);
                }
            }
        }
        @media (max-width:550px){
            align-items:center;
            display:grid;
            margin:1rem auto;
            justify-items:center;
            grid-template-columns:1fr 1fr 5fr;
            padding:0 .45rem;
            width:100%;
            & > .skill{
                align-items:center;
                display:flex;
                height:2rem;
                justify-content:flex-start;
                order:3;
                width:100%;
                & > span{
                    margin:auto 0;
                    height:60%;
                    left:0%;
                    top:50%;
                    transform:translateY(-50%);
                    width:${({value}) => value}%;
                }
            }
            & > .procent{
                order:2;
                padding:.25rem .45rem;
                width:100%;
            }
            & > .stack{
                order:1;
                width:100%;
            }
        }
        @media (max-width:300px){
            min-height:3rem;
            grid-template-columns:1fr 1fr 3fr;
            & > .skill{
                & > span{
                    border-radius:4rem;
                    height:50%;
                }
            }
            & > .procent{
                padding:.25rem .45rem;
            }
        }
    }
`