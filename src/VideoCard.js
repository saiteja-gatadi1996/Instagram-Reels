import React, { useRef, useState } from 'react'
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({url,likes, shares, channel, avatarSrc, song}) {
    const[isVideoPlaying, setIsVideoPlaying]=useState(false);
    //videoRef to point to the video
    const videoRef= useRef(null);
    const onVideoPress=()=>{
        if(isVideoPlaying){
            //pause the video
            videoRef.current.pause();
            //update the state to pause/false
            setIsVideoPlaying(false);
        }else{
            //then play the vidoe
            videoRef.current.play();
            //update the state to true
            setIsVideoPlaying(true);
        }
    }
    return (
        <div className="videoCard"> 
        <VideoHeader/>
        <video ref={videoRef} 
        onClick={onVideoPress} 
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
        />
            <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}/>
        </div>
    )
}

export default VideoCard
