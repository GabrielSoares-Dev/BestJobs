import React from 'react';
import NavBar from '../../components/layouts/navbar';
import Search from 'antd/lib/input/Search';
import * as Ui from './stylesui';



const InitialPage: React.FC = () => {

    return (
        <>
            <NavBar />
            <Search
                placeholder='Venha'
                style={Ui.InputCustom}
                size="large"
                enterButton="Pesquisar"
            />
        </>
    )
}

export default InitialPage;