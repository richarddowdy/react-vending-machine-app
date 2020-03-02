import React from 'react';
import { Link } from "react-router-dom";
// import Soda from './Soda';
// import Cookies from './Cookies';
// import Crackers from './Crackers';

function VendingMachine(){

  return (
    <div>
      <Link to='/soda'>
        Soda
      </Link>
      <Link to='/cookies'>
        Cookies
      </Link>
      <Link to='/crackers'>
        Crackers
      </Link>
    </div>
  )

};


export default VendingMachine;