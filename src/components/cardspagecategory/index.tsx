import React from 'react';
import { Grid } from '@mui/material';
import { Rate } from 'antd';
import * as Styled from './styles';
import { ICardProps } from './type';

const CardCategory: React.FC<ICardProps> = ({
    description,
    img,
    name,
    price,
    star
}) => {

    return (
        <Styled.CardCustom
            cover={<img alt="example" src={img} />}
        >
            <Grid
                flexDirection='column'
                container>
                <Grid item>
                    <Styled.NameAuthor>{name}</Styled.NameAuthor>
                </Grid>
                <Grid item>
                    <Styled.DescAuthor>{description}</Styled.DescAuthor>
                </Grid>
                <Grid
                    item>
                    <Rate value={star} />
                </Grid>
                <Grid
                    item
                >
                    <Styled.CustomDivider />
                </Grid>
                <Grid
                    item
                    display='flex'
                    alignItems='end'
                    flexDirection='column'
                >
                    <Styled.TitlePrice>Preço médio</Styled.TitlePrice>
                    <Styled.Price>R$ {price}</Styled.Price>
                </Grid>

            </Grid>

        </Styled.CardCustom>
    )
}
export default CardCategory;