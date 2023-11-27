import React, {  } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Movies from './pages/movies/Movies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/movies",
    element: <Movies/>
  }
])


const App = () => {
  return (
    <>
      <h1>Unimovie</h1>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
