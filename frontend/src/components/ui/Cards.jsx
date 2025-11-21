import React from 'react'
import { IoShieldCheckmark } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { IoFingerPrintOutline } from "react-icons/io5";

const Cards = () => {
   const content = [
  {
    id: 1,
    description: "Analyze website safety instantly with AI-powered threat detection.",
    icon: <IoShieldCheckmark />
  },
  {
    id: 2,
    description: "Preview the website content safely before opening the link.",
    icon: <FaEye/>
  },
  {
    id: 3,
    description: "Detect phishing, malware risks, and suspicious redirects.",
    icon: <FiAlertTriangle/>
  },
  {
    id: 4,
    description: "Get a clean trust score and privacy insights for every URL.",
    icon: <IoFingerPrintOutline />
  }
];

  return (
    <div className='w-full h-auto p-[30px] grid grid-cols-2 text-[15px] gap-2 items-center md:grid-cols-4 md:text-[18px]'>
    {
        content.map((ele)=>(
            <div key={ele.id}
            className='  text-gray-200 shadow-2xl shadow-blue-900 bg-blue-800 rounded-2xl w-auto h-[150px] m-[10px] flex flex-col gap-2 p-[10px] items-center text-center hover:scale-95'
            >
            <p className='text-amber-500 text-[25px] '>{ele.icon}</p>
            <p className='leading-5'>{ele.description}</p>

            </div>
        ))
    }

    </div>
  )
}

export default Cards