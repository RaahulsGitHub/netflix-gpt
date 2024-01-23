import React from 'react'
import Header from "./Header"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {removeUser} from "../utils/userSlice"

function Browse() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
    
  }

  return (
    <div>
        
      <div className="w-full flex">
        <Header />

        <div className=" h-12 m-4 my-6 absolute flex right-1 z-20">
         <div className='h-fit flex flex-col items-center'>
          <img
            className="w-12 "
            src={user?.photoURL}
            alt=""
          />
           <p className='text-sm'>{user?.displayName}</p>
          </div> 
          <button onClick={handleSignOut} className="rounded-lg p-3 mx-2 bg-red-800 text-white">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Browse