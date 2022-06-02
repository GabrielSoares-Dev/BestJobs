import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InitialPage from '../pages/inicio';
import PageCategoryAulas from '../pages/category/aulas';
import PageCategoryConsultoria from '../pages/category/consultoria';
import PageCategoryAutomoveis from '../pages/category/autos';
import PageCategoryTecnologias from '../pages/category/tecnologias';
import PageCategoryManutencoes from '../pages/category/manutencoes';

const RouterMain: React.FC = () => {
    return (
        <Routes>
            <Route index element={<InitialPage />} />
            <Route path="/category/aulas" element={<PageCategoryAulas />} />
            <Route path="/category/consultorias" element={<PageCategoryConsultoria />} />
            <Route path="/category/automoveis" element={<PageCategoryAutomoveis />} />
            <Route path="/category/tecnologias" element={<PageCategoryTecnologias />} />
            <Route path="/category/manutencao" element={<PageCategoryManutencoes  />} />

        </Routes>
    )
}




export default RouterMain;

