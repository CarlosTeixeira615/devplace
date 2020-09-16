import styled from 'styled-components'

const colors = {
    white: "#fff",
    whiteDark: "#F5F5F5",
    black: "#000",
    gray: "#525252",
    orange: "#FA5805"
}

export const Container = styled.div`
    width: 60%;
    height: 100vh;

    background-color: #000;
`

export const Title = styled.h1`
    position: absolute;

    top: 36%;
    left: 2%;

    font-size: 60px;

    color: #fff;
`

export const Slogan = styled.h1`
    position: absolute;

    top: 50%;
    lefT: 2%;

    font-size: 40px;

    color: ${ colors.gray };
`

export const ButtonCont = styled.div`
    position: absolute;

    top: 70%;
    left: 2%;
`

export const ContainerRight = styled.div`
    position: absolute;

    top: 0%;
    right: 0%;

    text-align: right;
`

export const Image = styled.img`
    margin-top: 10rem;

    width: 546px;
`

export const Paragraph = styled.p`
    margin-right: 1rem;

    font-size: 1rem;

    color: ${ colors.gray };
`