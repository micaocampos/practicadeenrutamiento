import React from 'react';

import Home from './Home';
import NumberPage from './NumberPage';
import WordPage from './WordPage';
import StyledPage from './StyledPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1>holamundo</h1>
            <Routes>
              <Route exact path="/home" component={Home} />
              <Route exact path="/:number" component={NumberPage} />
              <Route exact path="/:word" component={WordPage} />
              <Route exact path="/:word/:textColor/:bgColor" component={StyledPage} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;