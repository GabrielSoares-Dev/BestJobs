import { ButtonProps } from '@mui/material';
import React from 'react';
import * as Styled from './styles';



export const Button: React.FC<ButtonProps> = ({ children, ...rest }) =>
    <Styled.CustomButton {...rest}>
        {children}
    </Styled.CustomButton>

