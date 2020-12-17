import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Pesquisa from './pages/pesquisar/index.js';

export default function Routes() {

    return (
      
      <BrowserRouter>
        <Route exact path='/' component={Pesquisa} />
      </BrowserRouter>


    );
  }
  
