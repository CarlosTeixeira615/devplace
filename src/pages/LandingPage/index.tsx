import React from 'react'

import Button from './components/Button'

import {
    Container,
    Title,
    Slogan,
    ButtonCont,
    Image,
    ContainerRight,
    Paragraph
} from './style'

import * as landingPageImage from '../../assets/image/landingPage.png'

const LandingPage = () => {
    return (
        <>
            <Container>
                <Title>DevPlace</Title>
                <Slogan>Sua plataforma de <br/>freelancer</Slogan>
                <ButtonCont>
                    <Button
                        title="Registre-se"
                        color="#fff"
                        backgroundColor="#FA5805"
                    />
                    <Button
                        title="Entre"
                        color="#FA5805"
                        backgroundColor="#FFF"
                    />
                </ButtonCont>
            </Container>
            <ContainerRight>
                <Image
                    src={ landingPageImage }
                    alt="freelancer"
                />
                <Paragraph>Juntos por um mundo mais acessível</Paragraph>
            </ContainerRight>
        </>
    )
}

export default LandingPage