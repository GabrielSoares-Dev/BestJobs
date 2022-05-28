import React, { useState } from 'react';
import NavBar from '../../components/layouts/navbar';
import Search from 'antd/lib/input/Search';
import * as Ui from './stylesui';
import Estrutura from '../../components/layouts/estrutura';
import { message } from 'antd';



const InitialPage: React.FC = () => {
    const [Loading, SetLoading] = useState(false);
    const HandleLoading = () => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);

        }, 2000);
        setTimeout(() => {
            message.error({
                content: 'OPS!! Não está disponivel Volte novamente mais tarde.',
                style: {
                    fontWeight: 'bold',
                }
            })
        }, 2000)


    }
    return (
        <Estrutura active={Loading}  >
            <Search
                placeholder='Venha'
                style={Ui.InputCustom}
                size="large"
                enterButton="Pesquisar"

            />
            <button onClick={HandleLoading}>test</button>
        </Estrutura>
    )
}

export default InitialPage;