import React, { useState } from 'react';
import { Message } from '../../utils/messages';
import Estrutura from '../../components/layouts/estrutura';


const PageCategory: React.FC = () => {
    const [Loading, SetLoading] = useState(false);
    const HandleLoading = () => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);
            Message('error', 'OPS!! Falhou volte novamente mais tarde', {
                fontWeight: 'bold',
            })
        }, 2000);
    };

    return (
        <Estrutura active={Loading}>
            <h1>test</h1>
        </Estrutura>
    )
}

export default PageCategory;

