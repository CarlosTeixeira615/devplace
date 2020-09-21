import React from 'react'

import {
    ButtonElement
} from './style'

interface ButtonProps {
    color: string;
    backgroundColor: string | undefined;
    title: string;
    onPress?: any;
    hover?: string;
    id?: string;
}

const Button: React.FC<ButtonProps> =({ color, backgroundColor, title, onPress , hover, id }) => {
    return (
        <ButtonElement 
            id={ id }
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