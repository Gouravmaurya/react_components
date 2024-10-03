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





// app jsx <code>
// const data = [
//   {
//     image: "https://images.unsplash.com/photo-1720005979515-60f2fa091fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
//     name: "Elephant",
//     description: "A root vegetable, usually orange in color, that is crunchy and sweet.",
//     friend:false
//   },
//   {
//     image: "https://plus.unsplash.com/premium_photo-1726863147915-0334ced370d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
//     name: "Deer",
//     description: "A colorful vegetable that comes in green, red, yellow, and orange varieties.",
//     friend:false
//   },
//   {
//     image: "https://images.unsplash.com/photo-1727026389192-7370d438f934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
//     name: "Dog",
//     description: "A long, green vegetable that is often used in salads and sandwiches.",
//     friend:false
    
//   },
//   {
//     image: "https://images.unsplash.com/photo-1726834693212-6f42b633216c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
//     name: "Cat",
//     description: "A leafy green vegetable that is rich in iron and vitamins.and also good for health",
//     friend:false
    
//   } 
// ];

// const [realdata, setrealdata] = useState(data)
// const handleFriendButton = (cardindex) => {
//   setrealdata((prevdata) =>{
//     return prevdata.map((item,index)=>{

//     if(index === cardindex){
//       return {...item, friend:!item.friend}
//   }
//   return item
// })
// })
// }

// return (
//   <>
//   {/* <div className="bg-zinc-950 h-screen  w-full flex justify-center items-center gap-10 ">
//     {realdata.map((item,index)=>(
//       <Propscard key={index} Index={index} image={item.image} friend={item.friend} handleFriend={handleFriendButton} index={index} name={item.name} description={item.description}/>
//     ))}
//     <Props/>
 
//   </div> */}
//   <Navbar/>
//     <div className="bg-zinc-950 h-screen  w-full flex justify-center items-center gap-10 ">
//       <CardsProject/>
//     </div>
//     </>
// );
// }

// export default App; 
// </code>
