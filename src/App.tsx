import React from 'react';
import 'antd/dist/antd.css';
import GlobalStyle from './styles';
import { BrowserRouter } from 'react-router-dom';
import RouterMain from '../src/routes/routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouterMain />
    </BrowserRouter>
  );
}

export default App;
