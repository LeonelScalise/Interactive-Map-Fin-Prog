import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './Components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />;;
    </Route>
  </Routes>
</BrowserRouter>
);

