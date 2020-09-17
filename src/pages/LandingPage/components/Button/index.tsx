import React from 'react'

import {
    ButtonElement
} from './style'

interface ButtonProps {
    color: string;
    backgroundColor: string;
    title: string;
    onPress?: any;
    hover?: string;
}

const Button: React.FC<ButtonProps> =({ color, backgroundColor, title, onPress , hover }) => {
    return (
        <ButtonElement 
            color={ color } 
            backgroundColor={ backgroundColor } 
            onClick={ onPress }
            hover= { hover }
        >
          { title } 
        </ButtonElement>
    )
}

export default Button