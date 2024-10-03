import React, { useState } from "react";
import Navbar from "./components/Navbar";

import CardsProject from "./components/CardsProject";
const data = [
 {image: "https://images.unsplash.com/photo-1726994804363-5c7ce2255254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
  name: "Tum hi Tum",
  artist: "mai",
  fav: false
},
{image: "https://images.unsplash.com/photo-1726497864623-7a681908fccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
  name: "Tum prem ho",
  artist: "mai",
  fav: false
}, 
{image: "https://images.unsplash.com/photo-1727717901508-36ae470b697c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  name: "Dilwale",
  artist: "mai",
  fav: false
}, 
{image: "https://images.unsplash.com/photo-1706871706925-7e1a45bcf501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  name: "Mere naam tu",
  artist: "mai",
  fav: false
},
{image: "https://images.unsplash.com/photo-1726994804363-5c7ce2255254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
  name: "Tum hi Tum",
  artist: "mai",
  fav: false
},
{image: "https://images.unsplash.com/photo-1726497864623-7a681908fccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
  name: "Tum prem ho",
  artist: "mai",
  fav: false
}, 
{image: "https://images.unsplash.com/photo-1727717901508-36ae470b697c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  name: "Dilwale",
  artist: "mai",
  fav: false
}, 
{image: "https://images.unsplash.com/photo-1706871706925-7e1a45bcf501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  name: "Mere naam tu",
  artist: "mai",
  fav: false
},

]
function App() {
  const[ songs, setSongs] = useState(data)
  const handleClick = (index) =>{
    setSongs((prevData) => {
      return prevData.map((item, i) => {
        if(i === index){
          return {...item, fav:!item.fav}
        }
        return item
      })
    })
  }

  return (
    <>
    
      <div className="bg-zinc-950 h-screen  w-full  ">
    <Navbar data={songs}/>
        <div className="px-20  flex gap-10 flex-wrap mt-10 justify-center ">
        {songs.map((obj, index)=>(
          <CardsProject 
            image={obj.image}
            name={obj.name}
            artist={obj.artist}
            fav={obj.fav}
            handleClick={handleClick}
            index={index}  
            key={index}  
          />
        ))}
        
        </div>
      </div>
      </>
  );
}

export default App; 