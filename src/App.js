import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar2';
import Home from './home';
import About from './about';
import './App.css';

function App() {

  return (
    <BrowserRouter >

      <>
        <header>
          <div class="flex-container">
            <h1 class="logo"><a href="#">ZADA<i>Rehab</i></a></h1>
            <Navbar />
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
