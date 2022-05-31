import React from 'react';
import { InputProps } from '@mui/material';
import * as Styled from './styles';

interface InputPropsI {
    dimension: 'small' | 'medium';
}

export const InputCustom: React.FC<InputPropsI> = ({ dimension }) => <Styled.CustomInput
    style={{
        width: dimension === 'small' ? '90vw' : '35vw',
    }}
    placeholder='Procure seu profissional' />