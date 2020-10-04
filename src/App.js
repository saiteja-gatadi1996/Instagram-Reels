import React, { useState, useEffect } from 'react';
import './App.css';
import db from "./firebase"

import VideoCard from "./VideoCard"
function App() {
  const[reels, setReels]= useState([])
  useEffect(()=>{

    //App component will run once when it loads, 
    db.collection('reels').onSnapshot(snapshot=>(
      setReels(snapshot.docs.map(doc=>doc.data()))
    ))
  },[])

  return (

    //BEM naming convention
    <div className="app">
    
    <div className="app__top">
     {/* image at the top */}
     <img className="app__logo" 
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
     alt=""/>
     {/* Reels text */}
     <h1>Reels</h1>
     </div>

     <div className="app__videos">
     {reels.map(({channel, avatarSrc, song, url, likes, shares})=>(
      
     <VideoCard 
     channel={channel}
     avatarSrc={avatarSrc}
     song={song}
     url={url}
     likes={likes}
     shares={shares}
     />
    
     ))}   
    </div>
    </div>
  );
}

export default App;
