import React, { useState } from 'react';
import { Message } from '../../../utils/messages';
import Estrutura from '../../../components/layouts/estrutura';
import { Grid } from '@mui/material';
import CardCategory from '../../../components/cardspagecategory';
import { Breadcrumbs } from '@mui/material'
import { Aulas } from '../../../datafake/aulas';
import { Pagination } from 'antd';
import * as Styled from '../styles';


const PageCategoryAulas: React.FC = () => {
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
                        <Styled.LinkCustom to='/'>Aulas</Styled.LinkCustom>
                    </Breadcrumbs>
                </Grid>
                <Grid
                    item
                >
                    <Styled.Title>Aulas</Styled.Title>
                </Grid>
                <Grid
                    gap={3}
                    alignItems='center'
                    container
                >
                    {Aulas.map((element) => (
                        <Grid
                            flexDirection='row'
                            item key={element.name}>
                            <CardCategory
                                name={element.name}
                                description={element.description}
                                img={element.img}
                                price={element.price}
                                star={element.star}
                            />
                        </Grid>
                    ))}


                </Grid>
                <Grid
                    item
                    display='flex'
                    justifyContent='center'
                    marginTop={5}
                >
                    <Pagination defaultCurrent={1} total={50} />
                </Grid>
            </Grid>

        </Estrutura>
    )
}

export default PageCategoryAulas;

