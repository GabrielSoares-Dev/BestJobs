import styled from 'styled-components';
import { Divider } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const Icon = styled(SettingOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;

export const CustomDivider  = styled(Divider)`
background-color:rgba(59,187,160,1);
height:5px;
width:100px;

`;

export const CategoriaTitle = styled.p`
color:#000;
font-size:24px;
font-weight:bold;
`;

export const TextCategoria = styled.p`
color:#000;
font-size:18px;
font-weight:bold;
text-align:center;
margin-top:10px

`;