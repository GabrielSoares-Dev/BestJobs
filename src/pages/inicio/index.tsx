import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Grid } from '@mui/material';
import * as Ui from './stylesui';
import Estrutura from '../../components/layouts/estrutura';
import { Message } from '../../utils/messages';
import { Input } from '../../components/Input';
import * as Styled from './styles';



const InitialPage: React.FC = () => {
    const [Loading, SetLoading] = useState(false);
    const HandleLoading = () => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);
            Message('error', 'OPS!! Falhou volte novamente mais tarde')
        }, 1000);


    }
    return (
        <Estrutura active={Loading} >
            <Grid
                container
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                marginTop={10}>
                <Grid width={370} xs={12} md={12} item>
                    <Styled.Title>
                       Os melhores serviços <Styled.Italic>freelance</Styled.Italic>  você acha aqui.
                    </Styled.Title>
                </Grid>
                <Grid xs={12} md={12} marginBottom={1} item>
                    <Input />
                </Grid>
                <Grid xs={12} md={12} item>
                    <Button onClick={HandleLoading}>Pesquisar</Button>
                </Grid>
            </Grid>
        </Estrutura>
    )
}

export default InitialPage;