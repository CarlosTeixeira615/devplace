import React from 'react'

import {
    ButtonElement
} from './style'

interface ButtonProps {
    color: string;
    backgroundColor: string | undefined;
    title: string;
    onPress?: any;
}

const Button: React.FC<ButtonProps> =({ color, backgroundColor, title, onPress  }) => {
    return (
        <ButtonElement 
            color={ color } 
            backgroundColor={ backgroundColor } 
            onClick={ onPress }
        >
          { title } 
        </ButtonElement>
    )
}

export default Button