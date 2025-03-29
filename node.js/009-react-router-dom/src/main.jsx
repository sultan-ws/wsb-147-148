import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import ComntactUs from './pages/ComntactUs'
import Layout from './layout/Layout'
import Login from './pages/Login'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path='/' element={<Layout />} >
        <Route path='home' element={<Home />} />
        <Route path='about-us' element={<Aboutus />} />
        <Route path='contact-us' element={<ComntactUs />} />
      </Route>

    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
