import React, { useState } from 'react';
import { Drawer, message } from 'antd'
import { useMediaQuery, Grid } from '@mui/material';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../../image/logo.png'
import * as Styled from './styles';
import * as UI from './stylesui';


const NavBar: React.FC = () => {
    const [visible, SetVisible] = useState(false);
    const [loader, SetLoader] = useState(false);
    const HandleOps = () => {
        SetLoader(true);
        setTimeout(() => {
            SetLoader(false);
            message.error({
                content: 'OPS!! Volte novamente mais tarde.',
                style: {
                    fontWeight: 'bold',
                }
            })
        }, 2000)

    }
    const match = useMediaQuery('(max-width:650px)');

    return (
        <>
            {!match ? (
                <Styled.ContainerNav>
                    <Styled.ContainerBrand>
                        <Styled.Brand onClick={HandleOps}>
                        <Styled.LogoCustom src={logo} alt="logo" />
                            BestJobs
                            </Styled.Brand>
                    </Styled.ContainerBrand>
                    <Styled.ContainerLinks>
                        <Styled.Links onClick={HandleOps}>Cadastrar</Styled.Links>
                        <Styled.Links onClick={HandleOps}>Torne-se um prestador</Styled.Links>
                        <UI.CustomButton onClick={HandleOps} variant="outlined">Login</UI.CustomButton>
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
                        <Styled.BrandMobile onClick={HandleOps}>
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
                            <Styled.LinksMobile onClick={HandleOps}>Cadastrar</Styled.LinksMobile>
                            <Styled.LinksMobile onClick={HandleOps}>Torne-se um prestador</Styled.LinksMobile>
                            <Styled.ContainerButtonMobile>
                                <UI.CustomButton onClick={HandleOps} variant="outlined">Login</UI.CustomButton>
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