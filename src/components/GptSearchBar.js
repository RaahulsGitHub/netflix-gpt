import React from 'react'
import langConst from '../utils/languageConstants'
import { useSelector } from 'react-redux'

function GptSearchBar() {

  const lang = useSelector((store)=>store.cofig.lang)
  console.log(lang)

  return (
    <div className='flex justify-center absolute w-[100%] mt-28'>
        <form className='relative w-[50%] flex justify-center'>
            <input className=' outline-none text-lg shadow-2x w-[90%] p-3 rounded-full' 
            type="text" 
            placeholder={langConst[lang].gptSearch}/>
            <button className='absolute right-9 p-3 text-lg rounded-r-full
             text-white bg-gray-800  text-center hover:bg-red-800'>{langConst[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar