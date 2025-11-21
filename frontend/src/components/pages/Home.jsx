import React from 'react'
import { SiFsecure } from "react-icons/si";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className=' w-full h-[100vh] bg-gray-950 text-white flex flex-col  justify-center items-center '>
      <SiFsecure className='text-[80px] text-green-500 m-[30px]' />
     <p className="text-[80px] font-medium text-shadow-yellow text-cyan-600 p-[30px] leading-2">
            Web Trust
    </p>
    <p className="text-lg font-medium text-gray-600 text-center leading-5 p-[20px] text-[15px] text-gray-600">
     Verify websites with Gemini — fast, private, and reliable checks. Scan trust signals, spot privacy risks, and confirm authenticity in seconds. "Confidence for the web — one check at a time."
    </p>

    <button className='w-[200px] h-[60px] anton-regular bg-green-900  rounded-2xl hover:bg-green-700'>
    <Link to='/Test'>SCAN NOW</Link>
    </button>
 

    </div>
  )
}

export default Home