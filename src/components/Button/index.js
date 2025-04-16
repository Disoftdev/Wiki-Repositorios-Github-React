import React from 'react'

import { ButtonContainer } from './styles';
import Input from '../input';

function Button({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
    )
}
export default Button