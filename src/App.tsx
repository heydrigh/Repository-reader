import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Globalstyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Globalstyle />
  </>
);

export default App;
