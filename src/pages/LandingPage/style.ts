import styled from 'styled-components'

import { Pallet } from '../../style/global'

export const Container = styled.div`
    width: 60%;
    height: 100vh;

    background-color: #000;

    @media(max-width: 460px) {
        position: absolute;

        top: 0;

        width: 100vw;
        height: 60vh;

        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;

        #title {
            top: 24%;
            left: 5%;
            font-size: 2rem;
        }

        #slogan {
            top: 45%;
            left: 5%;
            font-size: 2rem;
        }

        Button{
            position: absolute;
            width: 10rem;
            height: 2rem;
            margin-right: 0.2rem;
        }

        Button:first-of-type{
            position: absolute;

            top: 40px;
            left: 13px;
        }

        Button:last-of-type {
            position: absolute;
            top: 40px;
            left: 11rem;
        }
    }
`

export const Title = styled.h1`
    position: absolute;

    top: 36%;
    left: 2%;

    font-size: 60px;

    color: ${Pallet.white};
`

export const Slogan = styled.h1`
    position: absolute;

    top: 50%;
    lefT: 2%;

    font-size: 40px;

    color: ${ Pallet.gray };
`

export const ButtonCont = styled.div`
    position: absolute;

    top: 70%;
    left: 2%;
`

export const ContainerRight = styled.div`
    position: absolute;

    top: 30%;
    left: 0%;

    width: 100vw;

    text-align: right;

    @media(max-width: 460px) {
        top: 60%;
        height: 40vh;

        img{
            position: absolute;

            left: 14%;

            width: 300px;
        }

        p {
            position: absolute;

            top: 88%;
            left: 12%;
        }
    }
`

export const Image = styled.img`
    width: 546px;
`

export const Paragraph = styled.p`
    margin-right: 1rem;

    font-size: 1rem;

    color: ${ Pallet.gray };
`