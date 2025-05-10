'use client';

import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const H2Animation = ({ children }) => { // Receive the children prop
  const h2Ref = useRef(null); // Ref for the h2 element

  const intersection = useIntersection(h2Ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const fadeIn = () => {
    if (h2Ref.current) {
      gsap.to(h2Ref.current, {
        duration: 1, // Adjust duration as needed
        opacity: 1,
        y: 0, // Assuming you want to move it from an initial y offset
        ease: "power2.out",
        delay: 0.2, // Adjust delay as needed
      });

      // Animate the following sibling
      const siblingElement = h2Ref.current.nextElementSibling;
      if (siblingElement) {
        gsap.to(siblingElement, {
          duration: 2, // Adjust duration as needed
          opacity: 1,
          y: 0, // Assuming you want to move it from an initial y offset
          ease: "power2.out",
          delay: 0.7, // Slightly later delay for the sibling
        });
      }
    }
  };

  const fadeOut = () => {
    if (h2Ref.current) {
      gsap.to(h2Ref.current, {
        duration: 1, // Adjust duration as needed
        opacity: 0,
        y: -20, // Example: move it up while fading out
        ease: "power2.out",
        delay: 0.2, // Adjust delay as needed
      });

      // Fade out the following sibling
      const siblingElement = h2Ref.current.nextElementSibling;
      if (siblingElement) {
        gsap.to(siblingElement, {
          duration: 1, // Adjust duration as needed
          opacity: 0,
          y: -20, // Example: move it up while fading out
          ease: "power2.out",
          delay: 0, // Slightly later delay for the sibling
        });
      }
    }
  };

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [intersection]);

  return (
    <>
      <h2 ref={h2Ref} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        {children} {/* Render the children here */}
      </h2>
      {/* The following sibling will be animated based on the h2's visibility */}
    </>
  );
};

export default H2Animation;