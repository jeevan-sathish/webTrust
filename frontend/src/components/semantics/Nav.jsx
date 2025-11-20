import React from 'react'
import { MdOutlineSafetyCheck } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='w-full sticky top-0 z-50 h-[9vh] p-[30px] text-white bg-black flex flex-row justify-between items-center sm:justify-around g-[30px] '>
    
    <div className='text-cyan-600 font-extrabold flex flex-row justify-center items-center'>Web
    <span className='text-green-600 font-medium'>Trust</span>
     <MdOutlineSafetyCheck className='text-[20px] text-red-600'/>
     </div>

     <ul className='flex flex-row gap-3'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Test'>Verify</Link></li>
     </ul>
    
    </nav>
  )
}

export default Nav