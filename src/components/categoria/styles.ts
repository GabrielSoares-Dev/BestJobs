import styled from 'styled-components';
import { Divider } from 'antd';
import {
SettingOutlined,
LaptopOutlined,
CarOutlined,
TeamOutlined,
DropboxOutlined,
BulbOutlined 
} from '@ant-design/icons';


export const IconManutencao = styled(SettingOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;
export const IconTec = styled(LaptopOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;
export const IconCarro = styled(CarOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;
export const IconAula = styled(TeamOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;
export const IconBox = styled(DropboxOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;
export const IconConsulto = styled(BulbOutlined)`
color:rgba(59,187,160,1);
font-size:28px;
`;

export const CustomDivider = styled(Divider)`
background-color:rgba(59,187,160,1);
height:5px;
width:75vw;
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