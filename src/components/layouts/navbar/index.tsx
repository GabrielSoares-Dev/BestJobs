import React from 'react';
import { Button } from '@mui/material'
import * as Styled from './styles';
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)({
    color: 'white',
    borderColor:'white',
    width:'50px',
    '&:hover': {
        backgroundColor: 'linear-gradient(90deg, rgba(59,187,160,1) 36%, rgba(45,119,167,1) 100%)',
      },
})
const NavBar: React.FC = () => {
    return (
        <Styled.ContainerNav>
            <Styled.ContainerLinks>
                <Styled.ContainerBrand>
                    <Styled.Brand>Ceunsp</Styled.Brand>
                </Styled.ContainerBrand>
                <div>

                    <Styled.Links>Cadastrar</Styled.Links>
                    <Styled.Links>Torne-se um prestador</Styled.Links>
                    <CustomButton variant="outlined">Login</CustomButton>
                </div>

            </Styled.ContainerLinks>
        </Styled.ContainerNav >
    )

}

export default NavBar;