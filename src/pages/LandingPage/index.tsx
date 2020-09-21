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

import {
    RiMenuLine
} from 'react-icons/all'

import * as landingPageImage from '../../assets/image/landingPage.png'

const LandingPage: React.FC = () => {
    return (
        <>
            <Container>
                <RiMenuLine 
                    color="#fff" 
                    size={30}
                    style={{ marginLeft: "12px" }}
                />
                <Title id="title">DevPlace</Title>
                <Slogan id="slogan">Sua plataforma de <br/>freelancer</Slogan>
                <ButtonCont>
                    <Button
                        id="sigin"
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