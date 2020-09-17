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

const LandingPage: React.FC = () => {
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
                        hover="rgba(255, 90, 0, 0.6)"
                    />
                    <Button
                        title="Entre"
                        color="#FA5805"
                        backgroundColor="#FFF"
                        hover="rgb(255, 255, 255, 0.6)"
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