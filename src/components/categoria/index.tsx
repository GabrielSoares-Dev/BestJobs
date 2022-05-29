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
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Styled.CategoriaTitle>Categorias de serviços</Styled.CategoriaTitle>
            </Grid>
            <Grid
                display='flex'
                justifyContent='center'
                item
                xs
            >
                <Styled.CustomDivider />
            </Grid>
            <Grid
                gap={3}
                container
                flexDirection='row'
                marginTop={2}
                justifyContent='center'

            >
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}

                >
                    <Styled.IconManutencao />
                    <Styled.TextCategoria>Manutenção</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.IconAula />
                    <Styled.TextCategoria>Aulas</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.IconTec />
                    <Styled.TextCategoria>Tecnologia</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.IconCarro />
                    <Styled.TextCategoria>Automóveis</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.IconConsulto/>
                    <Styled.TextCategoria>Consultoria</Styled.TextCategoria>

                </Grid>
                <Grid
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                >
                    <Styled.IconBox />
                    <Styled.TextCategoria>Entregas</Styled.TextCategoria>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Categoria;