import React, { useState, useRef } from 'react'
import Header from './Header'
import validation from '../utils/validation'


function Login() {

    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);

    const handleSignIn = ()=>{
        setIsSignIn(!isSignIn)
    }
    // const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);


    const handleSubmit = ()=>{
        
        const message = validation(email.current.value, password.current.value)
        setErrorMessage(message)
    }
    

  return (
    <div className='bg-black'>
            <Header/>
        <div className='absolute'>
         <img className=''
            src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background" />
        </div>
        
        <div className='absolute bg-black p-6 w-3/12 mx-auto right-0 left-0 my-32 rounded-md bg-opacity-80'>
        <h2 className='text-white text-3xl font-semibold'>{isSignIn?"Sign In":"Sign Up"}</h2>
        <form onSubmit={(e)=>e.preventDefault()} className='p-6'>

           {!isSignIn && 
           (<input  className='w-full my-3 p-3 rounded-lg bg-[#333] text-white font-semibold'
                   type="text"  placeholder="Your Name"/>)}
           
            <input ref={email} className='w-full my-3 p-3 rounded-lg bg-[#333] text-white font-semibold'
                   type="text"  placeholder="Email Address"/>
            
            <input ref={password} className='w-full block my-3 p-3 rounded-lg bg-[#333] text-white font-semibold' 
                   type="password" placeholder='Password' />

                <p className='text-yellow-500' >{errorMessage}</p>

            <button onClick={handleSubmit} className='cursor-pointer w-full block text-white my-8
             p-3 rounded-lg bg-red-700'>{isSignIn?"Sign In":"Sign Up"}</button>

            {isSignIn === true?<p onClick={handleSignIn} className='cursor-pointer text-white'><span 
            className='text-[#656565]'>New to Netflix?</span> Sign Up now.</p>:
                                <p onClick={handleSignIn} className='cursor-pointer text-white'><span 
                                className='text-[#656565]'>Already member?</span> Sign In.</p>}
        </form>
        </div>

    </div>
  )
}

export default Login