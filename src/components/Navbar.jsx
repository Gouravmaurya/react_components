import React from 'react'


function Navbar({data}) {
  return (
    <div className='w-full  text-white px-24 py-5 bg-zinc-900 flex justify-between items-center  '>
      <h1 className='text-2xl '>Greenify</h1>
      <div className='flex justify-between items-center gap-2 px-4 py-2  bg-green-600  rounded-md text-xs' >
        <h3>Favourite</h3>
        <h4>{data.filter(item =>item.fav).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;