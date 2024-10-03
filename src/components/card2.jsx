import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const card2 = () => {
 
    const [isHover, setIsHover] = useState(false)
  return (
    <div>
      <div className='w-full h-screen bg-zinc-700 flex  justify-center items-center'>
        <div className='w-80 h-48 rounded-md flex relative hover:skew-x-3 overflow-hidden'>
            <img className={`shrink-0 w-full transition-transform duration-700 ease-linear  ${isHover === false ?  "-translate-x-[0%]" : "-translate-x-[100%]"} h-full object-cover`} src="https://images.unsplash.com/photo-1725576421812-85ca2e111835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`shrink-0 w-full transition-transform duration-700 ease-linear ${isHover === false ?  "-translate-x-[0%]" : "-translate-x-[100%]"} h-full object-cover`} src="https://images.unsplash.com/photo-1727455113671-ef73f638b87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=>setIsHover(()=>!isHover)} className=' animate-bounce absolute rounded-full w-8 h-8  bg-[#dadada8b]  bottom-2  left-1/2 -translate-x-[50%]  -translate-y-[50%] flex justify-center items-center'>
                <FaArrowRight size={".7em"}/>
            </span>
        </div>
      </div>
    </div>
  )
}

export default card2
