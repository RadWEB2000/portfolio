import styled from 'styled-components';
export const Wrapper = styled.li`
    & > a,
    & > a > div{
        align-items:center;
        border-radius:50%;
        display:flex;
        justify-content:center;
    }
    & > a{
        height:4rem;
        overflow:hidden;
        position:relative;
        transition:.15s .12s linear transform;
        width:4rem;
        z-index:0;
        &::before{
            background-color:${({color}) => color};
            opacity:0;
            top:100%;
            transition:.15s linear opacity,.15s linear transform,.15s linear visibility;
            visibility:hidden;
            z-index:-1;
        }
        &::before,
        * > div{
            height:100%;
            width:100%;
        }
        & > div{
            color:${({color}) => color};
            margin:auto;
            font-size:2.45rem;
            transition:.15s linear color,.15s linear transform;
        }
        &:focus,
        &:hover{
            transform:scale(1.05);
            &::before{
                opacity:1;
                transform:translateY(-100%);
                visibility:visible;
            }
            & > div{
                color:${({theme}) => theme.colors.background};
                transform:rotateY(360deg);
            }
        }
    }
`