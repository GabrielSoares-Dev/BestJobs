import React from 'react';
import Spinner from '../../spinner';
import NavBar from '../navbar';
import { IEstruturaProps } from './type';

const Estrutura: React.FC<IEstruturaProps> = ({ active, children }) => {

    return (
        <>
            <NavBar />   
                {active ? <Spinner /> : children}
        </>
    )

}

export default Estrutura;