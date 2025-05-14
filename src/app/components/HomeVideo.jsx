'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function HomeVideo({ homePageData }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    const handleVideoLoad = () => {
      // console.log('handleVideoLoad executed');
      if (section) {
        section.classList.add('videoReady');
        // Animate video opacity in
        if (video) {
          gsap.to(video, { opacity: 1, duration: 7, ease: 'power1.inOut' });
        }
      }
    };

    if (video && section) {
      // Set initial opacity to 0
      gsap.set(video, { 
        // filter: 'brightness(0)', 
        opacity: 0, 
        // filter: 'blur(10px) brightness(0.5)' 
      });

      // Check if the video is already loaded
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
        // console.log('Video already loaded on mount');
        section.classList.add('videoReady');
        gsap.to(video, { 
          // filter: 'brightness(1)', 
          opacity: 1 , 
          delay: 4, 
          // filter: 'blur(0px) brightness(1)', 
          duration: 7, 
          ease: 'power1.inOut' 
        });
      } else {
        video.addEventListener('loadeddata', handleVideoLoad);
      }

      return () => {
        if (video) {
          video.removeEventListener('loadeddata', handleVideoLoad);
        }
      };
    }
  }, [homePageData]);

  return (
    <section ref={sectionRef} className="homeVideo">
      {homePageData?.homeVideo1?.asset?.url ? (
        <video ref={videoRef} className="videos" autoPlay muted loop playsInline style={{ opacity: 0 }}>
          <source src={homePageData.homeVideo1.asset.url} type="video/webm" />
        </video>
      ) : (
        <video ref={videoRef} className="videos" autoPlay muted loop playsInline style={{ opacity: 0 }}>
          <source src="https://cdn.sanity.io/files/2j7eol5d/production/56c9e00e3fe8fdb55409d4dc514f278f1045f115.webm" type="video/webm" />
        </video>
      )}
    </section>
  );
}

export default HomeVideo;