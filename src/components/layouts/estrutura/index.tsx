import React from 'react';
import Spinner from '../../spinner';
import NavBar from '../navbar';
import { IEstruturaProps } from './type';

const Estrutura: React.FC<IEstruturaProps> = (
    {
        active,
        onClicks,
        onClicksButton,
        onClickAbrir,
        onClickFechar,
        children,
        open,

    }) => {

    return (
        <>
            <NavBar 
            onClickAbrir={ onClickAbrir}
            onClickFechar={onClickFechar}
            open={open} 
            onClicks={onClicks} 
            onClicksButton={onClicksButton}

             />
            {active ? <Spinner /> : children}
        </>
    )

}

export default Estrutura;