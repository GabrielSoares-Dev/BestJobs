import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

interface Props {
    onClick: React.MouseEventHandler<HTMLAnchorElement>
}

const Categoria: React.FC<Props> = ({ onClick }) => {
    const match = useMediaQuery('(max-width:650px)');
    const navigate = useNavigate()
    function HandleNavigate() {
        return navigate('/category')
    }
    return (
        <Grid
            container
            marginTop={match ? 10 : 32}
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
                    onClick={HandleNavigate}
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                    sm={3}
                    lg={3}

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
                    sm={3}
                    lg={3}
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
                    lg={3}
                >
                    <Styled.IconManutencao />
                    <Styled.TextCategoria>Manutenção</Styled.TextCategoria>


                </Grid>
                <Grid
                    sm={3}
                    item
                    flexDirection='column'
                    justifyContent='center'
                    display='flex'
                    width={105}
                    lg={3}
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
                    lg={3}
                >
                    <Styled.IconConsulto />
                    <Styled.TextCategoria>Consultoria</Styled.TextCategoria>

                </Grid>
                <Grid
                    sm={3}
                    lg={3}
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
            <Grid
                item
                marginTop={1}
            >
                <Styled.CategoriaNav onClick={onClick}>Ver todas categorias</Styled.CategoriaNav>
            </Grid>
        </Grid>
    )

}

export default Categoria;