import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Grid, useMediaQuery } from '@mui/material';
import * as Ui from './stylesui';
import Estrutura from '../../components/layouts/estrutura';
import { Message } from '../../utils/messages';
import { InputCustom } from '../../components/Input';
import Categoria from './categoria';
import pessoa from '../../image/pessoa.png';
import * as Styled from './styles';



const InitialPage: React.FC = () => {
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

    const match = useMediaQuery('(max-width:650px)');
    return (
        <Estrutura active={Loading} >
            <Grid
                container
                flexDirection="column"
                alignItems={match ? 'center' : ''}
                marginTop={match ? 10 : 20}
            >
                <Grid
                    marginLeft={match ? 0 : 5}
                    width={340}
                    item
                >
                    <Styled.Title>
                        Os melhores serviços <Styled.Italic>freelance</Styled.Italic>  você acha aqui.

                    </Styled.Title>
                    {!match &&
                        <Styled.PessoaImg
                            src={pessoa}
                            alt='pessoa' />}
                </Grid>
                {match ? (
                    <>
                        <Grid
                            xl={4}
                            md={8}
                            marginBottom={1}
                            item
                        >
                            <InputCustom />
                        </Grid>
                        <Grid xs={12} md={4} item>
                            <Button onClick={HandleLoading}>Pesquisar</Button>
                        </Grid>
                    </>
                ) : (
                    <Grid
                        marginLeft={5}
                        item
                    >
                        <Styled.SearchCustom
                            placeholder="Procure pelo seu profissional"
                            size='large'
                            enterButton="Search"
                        />
                    </Grid>
                )
                }
            </Grid>
            <Categoria onClick={HandleLoading} />
        </Estrutura>
    )
}

export default InitialPage;