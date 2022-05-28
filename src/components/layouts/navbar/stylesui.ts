import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'

export const CustomButton = styled(Button)`
color: #ffff;
border-color: #ffff;
width: 100px;
font-weight: bold;
font-family: 'Josefin Sans,sans-serif';
transition: 0.4s;
&:hover{ 
    opacity: 0.5;
    border-color: #ffff;
    }
`;
export const Drawer = {
    background: 'rgba(59,187,160,1)',
    width: '100%',
    fontWeight: 'bold',
}

export const MenuButton = {
    marginLeft: '20px',
    fontSize: '25px',

}