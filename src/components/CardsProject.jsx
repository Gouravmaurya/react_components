import React from 'react'

const CardsProject = (data) => {

  const {image,artist,name,fav,handleClick,index} =data;
  return (
    <div className='w-60 p-4 bg-zinc-100 rounded-md flex  mt-12 items-center justify-center gap-4 relative pb-6'>
      <div className='w-20 h-20 bg-green-600 rounded-md'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div >
        <h3 className='text-xl font-semibold leading-none pb-2'>{name}</h3>
        <h4 className='text-sm text-zinc-500'>{artist}</h4>
      </div>
      <button onClick={()=>handleClick(index)} className={`${fav ? "bg-blue-900": "bg-green-600"} px-4 py-2 rounded-full text-xs absolute text-zinc-50 bottom-0 whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%]`}> {fav ? "added" : "Add to fav"}</button>

    </div>
  )
}

export default CardsProject
