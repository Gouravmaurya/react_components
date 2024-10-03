import React from 'react'

const Propscard = ({image,name,description,handleFriend,Index,friend}) => {
  return (
   <div className='w-52  bg-zinc-100 rounded-md overflow-hidden '> 
    <div className='w-full h-32 bg-zinc-600 '>
      <img className='w-full h-full object-cover' src={image} alt={name} />
    </div>
    <div className='w-full bg-zinc-300 px-3 py-4'>
      <h1 className='text-xl font-semibold'>
        {name}
        </h1>
      <p className='text-xs mt-1 font-light'>
        {description}
      </p>
      <button onClick={()=>{handleFriend(Index)}} className={`px-2 py-1 ${friend ? "bg-red-500" : "bg-sky-500"} text-zinc-50 mt-2 text-sm rounded-md`}>{friend ? "Remove Friend" : "Add Friend"}</button> 
      {/* <button onClick={()=>alert("Friend Added")} className='px-2 py-1 bg-sky-500 text-zinc-50 mt-2 text-sm rounded-md'>Add Friend</button>  */}
    </div>
   </div>
  )
}

export default Propscard
