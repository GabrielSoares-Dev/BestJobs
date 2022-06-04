import React from 'react';
import Spinner from '../../spinner';
import NavBar from '../navbar';
import { IEstruturaProps } from './type';

const Estrutura: React.FC<IEstruturaProps> = ({ active, onClicks, onClicksButton, children }) => {

    return (
        <>
            <NavBar onClicks={onClicks} onClicksButton={onClicksButton} />
            {active ? <Spinner /> : children}
        </>
    )

}

export default Estrutura;