import React, { useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../constant';
import { TweenMax,Power1 } from 'gsap';


const Lore = () => {
  const {bossManImg, bossManVideo} = mediaDataObj;
  const videoRef = useRef(null);
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );
  // useEffect(()=>{
  //   const handleScroll = () =>{
  //     const video =  videoRef.current;
  //     const scrollDirection = window.scrollY > 0 ? "forward" : "backward";
  //     video.playbackRate = scrollDirection === 'forward' ? 1 : -1;
  //     video.play()
  //   }
  //   window.addEventListener('scroll', handleScroll);

  //   return () =>{
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // },[])

  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   let timeout;

  //   const handleScroll = () => {
  //     if (!isScrolling) {
  //       setIsScrolling(true);

  //       // Play the video
  //       videoRef.current.play();

  //       // Clear the previous timeout, if any
  //       clearTimeout(timeout);

  //       // Set a timeout to pause the video after a short delay (e.g., 1 second)
  //       timeout = setTimeout(() => {
  //         setIsScrolling(false);
  //         videoRef.current.pause();
  //       }, 500); // Adjust the delay as needed
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     // Remove the event listener and clear the timeout when the component unmounts
  //     window.removeEventListener('scroll', handleScroll);
  //     clearTimeout(timeout);
  //   };
  // }, [isScrolling]);

  return <div className="container">
    <div className='video-container'>

      <div>
     <video 
        loop
        className='w-full'
        ref={videoRef}
        autoPlay={true}
        muted={muteMode}
        controlsList="nodownload"
        playsInline={true}
        disablePictureInPicture={true}
        controls={false}>
      <source src={bossManVideo} type='video/mp4' />
      </video>
      </div>
    </div>
    </div>;
};

export default Lore;
