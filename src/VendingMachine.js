import React from 'react';
import { Link } from "react-router-dom";

function VendingMachine() {



  return (
    <div className="VendingMachine">
      <Link to='/soda'>
        Soda
      </Link>
      <Link to='/cookies' >
        Cookies
      </Link>
      <Link to='/crackers'>
        Crackers
      </Link>
    </div>
  )
};

export default VendingMachine;