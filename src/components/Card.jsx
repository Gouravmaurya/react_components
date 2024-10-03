import React from 'react'

const cardData = [
  {
    image: "https://media.istockphoto.com/id/917581076/photo/fresh-carrot-with-slice-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=QWE-oEX9KnEVIQl53bFNRBELK83DLsAianJLu04m_R4=",
    name: "Carrot",
    description: "A root vegetable, usually orange in color, that is crunchy and sweet.",
    instock: true
  },
  {
    image: "https://images.unsplash.com/photo-1621953723422-6023013f659d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsbCUyMHBlcGVyfGVufDB8fDB8fHww",
    name: "Bell Pepper",
    description: "A colorful vegetable that comes in green, red, yellow, and orange varieties.",
    instock: false
  },
  {
    image: "https://media.istockphoto.com/id/1045761832/photo/fresh-green-cucumber-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=GQHbGP0Lhv3ZduUGtfvDBemBjIk_WNlvli-La6AiwyQ=",
    name: "Cucumber",
    description: "A long, green vegetable that is often used in salads and sandwiches.",
    instock: true
  },
  {
    image: "https://images.unsplash.com/photo-1515363578674-99f41329ab4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Spinach",
    description: "A leafy green vegetable that is rich in iron and vitamins.and also good for health",
    instock: true
  }
];

const card = () => {
  return (
    <div>
      <div className='w-full h-screen bg-zinc-700 flex flex-wrap justify-center items-center'>
        {cardData.map((item, index) => (
          <div key={index} className='w-52  m-4 bg-zinc-100 rounded-md overflow-hidden'>
            <div className='w-full h-32 bg-zinc-900'>
              <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
            </div>
            <div className='w-full bg-zinc-300 px-3 py-4'>
              <h1 className='text-xl font-semibold'>{item.name}</h1>
              <p className='text-xs mt-1 font-light'>
                {item.description}
              </p>
            <button className={`px-2 py-1 ${item.instock ? "bg-sky-500":"bg-red-600"} text-zinc-50 mt-2 text-sm rounded-md`} >{item.instock ?"Instock":"Out Of Stock" }</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default card