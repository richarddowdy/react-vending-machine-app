import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Cookies() {

const [cookies, setCookie] = useState([])

let count = 0;


const addCookie = cookies => {
  count++;
  let newCookie = count;
  cookies.map(c => {
    cookies = [...cookies, newCookie]
  })
}


  return (
    <div>
      <h1>
        Cookies
      </h1>
      <Link to="/">Vending Machine</Link>
      <button onClick={addCookie}>Cookie</button>
      {cookies.map((c,index) => {
      < Cookie />  
      })
      }
    </div>
  )
}

export default Cookies;