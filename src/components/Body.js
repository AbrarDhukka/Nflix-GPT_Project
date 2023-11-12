import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Homepage from './Homepage'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch()
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

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid, email:email, displayName: displayName}));
     
    } else {
      dispatch(removeUser());
    }
  });
},[])

  return (
    <div>
        <RouterProvider router={approuter}></RouterProvider>
    </div>
  )
}

export default Body