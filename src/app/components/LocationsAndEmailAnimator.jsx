'use client';

import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const LocationsAndEmailAnimator = ({ locations, email }) => {
  const containerRef = useRef(null);

  const intersection = useIntersection(containerRef, {
    root: null,
    rootMargin: '-100px 0px 0px 00px', // Adjust top margin to trigger earlier
    threshold: [0, 0.3], // Trigger at 0% (fully out of view at top) and 50% (fully in view)
  });

  const fadeIn = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        delay: 0.4,
      });
    }
  };

  const fadeOut = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: "power2.out",
        delay: 0,
      });
    }
  };

  useEffect(() => {
    if (intersection) {
      if (intersection.intersectionRatio > 0.3) {
        fadeIn();
      } else if (intersection.intersectionRatio === 0) {
        fadeOut(); // Fade out when fully out of view at the top
      }
    }
  }, [intersection]);

  return (
    <div ref={containerRef} className="locationsNemail" style={{ opacity: 0, transform: 'translateY(20px)' }}>
      <div className="locationsCodes">
        <p>{locations}</p>
      </div>
      <div className="homeEmail">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default LocationsAndEmailAnimator;