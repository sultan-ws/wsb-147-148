import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './assets/css/style.css'
import '@fontsource/merriweather';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Accordion from './pages/Accordion';
import ToDoList from './pages/ToDoList';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/accordion' element={<Accordion />} />
      <Route path='/to-do-list' element={<ToDoList />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
