import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InitialPage from '../pages/inicio';
import PageCategory from '../pages/category';

const RouterMain: React.FC = () => {
    return (
        <Routes>
            <Route index element={<InitialPage />} />
            <Route path="/category" element={<PageCategory />} />
        </Routes>
    )
}




export default RouterMain;

