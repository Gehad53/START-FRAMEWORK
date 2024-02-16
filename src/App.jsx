import React from 'react'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'





 let routers = createBrowserRouter([
  {
    path:'' , element: <Layout/> , children: [
     { index: true , element: <Home/>} ,
     { path: 'about' , element: <About/> },
     { path: 'portfolio' , element: <Portfolio/> },
     { path: 'contact' , element: <Contact/> },
     {path:'*', element: <NotFound/>},
  ]}
 ])

export default function App() {
  return <>
     <RouterProvider router={routers}></RouterProvider>
    </>
  
}

