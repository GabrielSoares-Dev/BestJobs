import styled from 'styled-components';
import { Divider } from '@mui/material';
import { Card } from 'antd';

export const NameAuthor = styled.p`
font-size:18px;
font-weight:bold;
`;

export const DescAuthor = styled.p`
font-size:14px;
font-weight:bold;
`;

export const CardCustom = styled(Card)`
width:250px;
box-shadow:rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
transition:1s;
cursor: pointer;
&:hover{
  transform:scale(1.1)
}
`;
export const CustomDivider = styled(Divider)`
width:100%;
`;

export const Price = styled.p`
font-size:14px;
font-weight:bold;
`;
export const TitlePrice = styled.p`
font-size:17px;
font-weight:bold;
`;