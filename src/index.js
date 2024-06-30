import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from 'components/DataContext';
import NotFound from "pages/NotFound";
import Notefolio from "pages/Notefolio";
import Detail from "pages/Detail";

import 'styles/scss/import.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <DataProvider> 
      <Routes>
        <Route path="/" element={<Notefolio/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
    </DataProvider>
  </BrowserRouter>
);
