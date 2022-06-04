import React, { useState } from 'react';
import { Drawer } from 'antd'
import { useMediaQuery, Grid } from '@mui/material';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../../image/logo.png'
import * as Styled from './styles';
import * as UI from './stylesui';
import { INavBarProps } from './type';


const NavBar: React.FC<INavBarProps> = ({ onClicks, onClicksButton }) => {
    const [visible, SetVisible] = useState(false);
    const navigate = useNavigate();

    const match = useMediaQuery('(max-width:650px)');

    return (
        <>
            {!match ? (
                <Styled.ContainerNav>
                    <Styled.ContainerBrand>
                        <Styled.Brand onClick={() => navigate('/')}>
                            <Styled.LogoCustom src={logo} alt="logo" />
                            BestJobs
                        </Styled.Brand>
                    </Styled.ContainerBrand>
                    <Styled.ContainerLinks>
                        <Styled.Links onClick={onClicks}>Cadastrar</Styled.Links>
                        <Styled.Links onClick={onClicks}>Torne-se um prestador</Styled.Links>
                        <UI.CustomButton onClick={onClicksButton} variant="outlined">Login</UI.CustomButton>
                    </Styled.ContainerLinks>
                </Styled.ContainerNav >
            ) : (
                <Styled.ContainerNavMobile>
                    <Styled.ContainerMenu>
                        <MenuOutlined
                            onClick={() => SetVisible(true)}
                            style={UI.MenuButton} />
                    </Styled.ContainerMenu>
                    <Styled.ContainerBrandMobile>
                        <Styled.BrandMobile onClick={() => navigate('/')}>
                            <Styled.LogoCustom src={logo} alt="logo" />
                            BestJobs
                        </Styled.BrandMobile>
                    </Styled.ContainerBrandMobile>
                    <Drawer
                        bodyStyle={UI.Drawer}
                        placement='left'
                        visible={visible}
                        onClose={() => SetVisible(false)}>
                        <Grid container flexDirection='column'>
                            <Styled.LinksMobile onClick={onClicks}>Cadastrar</Styled.LinksMobile>
                            <Styled.LinksMobile onClick={onClicks}>Torne-se um prestador</Styled.LinksMobile>
                            <Styled.ContainerButtonMobile>
                                <UI.CustomButton onClick={onClicksButton} variant="outlined">Login</UI.CustomButton>
                            </Styled.ContainerButtonMobile>

                        </Grid>
                    </Drawer>
                </Styled.ContainerNavMobile>

            )
            }
        </>

    )

}

export default NavBar;