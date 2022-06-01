import React, { useState } from 'react';
import { Message } from '../../utils/messages';
import Estrutura from '../../components/layouts/estrutura';
import { Grid } from '@mui/material';
import CardCategory from '../../components/cardspagecategory';
import { Breadcrumbs } from '@mui/material'
import * as Styled from './styles';


const PageCategory: React.FC = () => {
    const [Loading, SetLoading] = useState(false);
    const HandleLoading = () => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);
            Message('error', 'OPS!! Falhou volte novamente mais tarde', {
                fontWeight: 'bold',
            })
        }, 2000);
    };

    return (
        <Estrutura active={Loading}>
            <Grid
                marginLeft={5}
                marginTop={10}
                flexDirection='column'
                container>
                <Grid item>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Styled.LinkCustom to='/'>BestJobs</Styled.LinkCustom>
                        <Styled.LinkCustom to='/'>Categorias</Styled.LinkCustom>
                    </Breadcrumbs>
                </Grid>
                <Grid
                    item
                >
                    <Styled.Title>Tecnologia</Styled.Title>
                </Grid>
                <Grid>
                    <CardCategory />
                </Grid>
            </Grid>

        </Estrutura>
    )
}

export default PageCategory;

