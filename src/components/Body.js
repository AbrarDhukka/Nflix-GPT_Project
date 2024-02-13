import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Homepage';

const Body = () => {
 
  const approuter = createBrowserRouter([
    {
      path:"/",
      element:<Homepage></Homepage>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/browse",
      element:<Browse></Browse>
    }
  ])

  return (
    <div>
        <RouterProvider router={approuter}></RouterProvider>
    </div>
  )
}
export default Body