import React from 'react';
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { About, Media, Contact, Layout, TitlePage, Reel, Error404 } from './pages';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<TitlePage />}>
        <Route index element={<TitlePage />} />
        </Route>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='photos' element={<Media />} />
          <Route path='reel'  element={<Reel />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
