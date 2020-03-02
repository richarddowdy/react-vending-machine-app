import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from './Soda';
import Cookies from './Cookies';
import Crackers from './Crackers';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/cookies'>
          <Cookies />
        </Route>
        <Route exact path='/crackers'>
          <Crackers />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
