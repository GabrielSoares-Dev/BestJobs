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
                marginBottom={-3}
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
                gap={1}
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
                    sm={3}
                    lg={2}

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
                    sm={3}
                    lg={2}
                >
                    <Styled.IconAula />
                    <Styled.TextCategoria>Aulas</Styled.TextCategoria>

                </Grid>
                <Grid
                    sm={3}
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                    lg={2}
                >
                    <Styled.IconTec />
                    <Styled.TextCategoria>Tecnologia</Styled.TextCategoria>

                </Grid>
                <Grid
                    sm={3}
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                    lg={2}
                >
                    <Styled.IconCarro />
                    <Styled.TextCategoria>Automóveis</Styled.TextCategoria>

                </Grid>
                <Grid
                    sm={3}
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                    lg={2}
                >
                    <Styled.IconConsulto />
                    <Styled.TextCategoria>Consultoria</Styled.TextCategoria>

                </Grid>
                <Grid
                    sm={3}
                    lg={2}                    
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