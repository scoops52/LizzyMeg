import React from 'react';
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { About, Media, Contact, Layout, TitlePage, Reel } from './pages';
import { Navbar } from './components';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<TitlePage />}>
        <Route index element={<TitlePage />} />
        </Route>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='photos' element={<Media />} />
          <Route path='reel'  element={<Reel />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
