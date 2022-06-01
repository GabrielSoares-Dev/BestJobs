import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
font-size:40px;
color:#000;
font-weight:bold;

`;

export const LinkCustom = styled(Link)`
font-size:14px;
color:#000;
&:hover{
    color:rgba(59,187,160,1);
}
`;
