import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Main from './multistepform/main';
import Userform from './component/userform';
import Login from './component/login';
import Header from './component/header';
import Card from './component/card';
import Output from './component/output';
import Items from './page/item';
import Cart from './page/cart';
import Addedcard from './page/addedcard';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='two'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/userform" element={<Userform />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cardapi" element={<Card />} />
          <Route path="/output" element={<Output />} />
          <Route path="/addtocart" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addedcards" element={< Addedcard />} />


        </Routes>
      </div>


    </div>
  );

}

export default App;
