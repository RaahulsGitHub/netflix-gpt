import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/browse",
    element: <Browse />,
  },
]);


function Body() {


  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL: photoURL }));
        
      } else {
        dispatch(removeUser());
      }
    });
  }, []);


  return (
    
    <div>
        <RouterProvider router={appRouter}/>
    </div>
    
 
  )
}

export default Body