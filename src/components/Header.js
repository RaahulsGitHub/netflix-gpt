import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SUPPORTED_LANG } from '../utils/constants';
import { signOut } from 'firebase/auth';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';



function Header() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); 
  }, []);
  
  
  
  const user = useSelector(store => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
    
  }

const handleGPTSearchClick = ()=>{
  dispatch(toggleGptSearchView())
}

const handleLangChange = (e)=>{
  dispatch(changeLang(e.target.value))
}


  return (
      
        <div className='px-8 py-2 bg-gradient-to-b from-black z-20 absolute w-full flex'>
            <img className='w-[200px] p-2' src={LOGO_URL} alt="logo" />
        
            {user && <div className=" h-12 m-4 my-6 absolute flex right-1 z-20">

              <select onChange={handleLangChange} className='mx-2 outline-none rounded-lg bg-gray-800
              text-white'>
                {SUPPORTED_LANG.map((lang)=>{
                  return <option className='p-1' key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                })}
              </select>
         <button onClick={handleGPTSearchClick} className='bg-purple-600 text-white px-5 rounded-lg mr-2'>GPT Search</button>
         <div className='h-fit flex flex-col items-center'>
          <img
            className="w-12 rounded-lg"
            src={user?.photoURL}
            alt="user photo"
          />
           <p className='text-sm'>{user?.displayName}</p>
          </div> 
          <button onClick={handleSignOut} className="rounded-lg p-3 mx-2 bg-red-800 text-white">
            Sign Out
          </button>
        </div>}
      </div>
       
   
  )
}

export default Header