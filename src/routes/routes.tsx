import React from 'react';
import { Route,Routes } from 'react-router-dom';
import InitialPage from '../pages/inicio';

const RouterMain:React.FC = () =>{
     return (
        <Routes>
            <Route index element={<InitialPage/>} />
        </Routes>
    )
}
   



export default RouterMain;

