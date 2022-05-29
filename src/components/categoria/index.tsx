import { Grid } from '@mui/material';
import React from 'react';
import * as Styled from './styles';

const Categoria: React.FC = () => {

    return (
        <Grid
            container
            marginTop={5}
            flexDirection='column'
            alignItems='center'
        >
            <Grid
                item
                xs
                display='flex'
                justifyContent='center'
                flexDirection='column'
                alignItems='center'
            >
                <Styled.CategoriaTitle>Categorias de serviços</Styled.CategoriaTitle>
                <Styled.CustomDivider />
            </Grid>
            <Grid
                gap={3}
                container
                flexDirection='row'
                marginTop={2}
                justifyContent='center'
                xs={12}
            >
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}

                >
                    <Styled.Icon />
                    <Styled.TextCategoria>Manutenção em geral</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.Icon />
                    <Styled.TextCategoria>Aulas</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.Icon />
                    <Styled.TextCategoria>Tecnologia</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.Icon />
                    <Styled.TextCategoria>Serviços domésticos</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.Icon />
                    <Styled.TextCategoria>Consultoria</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.Icon />
                    <Styled.TextCategoria>Manutenção em geral</Styled.TextCategoria>

                </Grid>
            </Grid>
        </Grid>
    )

}

export default Categoria;