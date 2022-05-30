import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

export const Title = styled.p`
color:#000;
font-size:32px;
font-weight:bold;
`;

export const Italic = styled.span`
font-style:italic;
`;
export const SearchCustom = styled(Search)`
width:600px;
`;

export const PessoaImg = styled.img`
width:50vw;
margin-left:50%;
`;