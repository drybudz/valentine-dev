'use client';
import { useEffect, useState } from 'react';

export default function ImagesAnimation({
  children,
  allImages = [],
  visibleCount = 16,
  intervalTime = 5000,
  fadeDuration = 1000 // reduced for better testing
}) {
  const [visibleImages, setVisibleImages] = useState([]);
  const [fadingOut, setFadingOut] = useState([]);

  // Helper functions
  const getRandomIndices = (count, max) => {
    const indices = new Set();
    while (indices.size < Math.min(count, max)) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  };

  const getRandomImages = (count) => {
    if (allImages.length === 0) return [];
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const getNewImage = (currentUrls) => {
    if (allImages.length === 0) return null;
    const currentUrlSet = new Set(currentUrls);
    const availableImages = allImages.filter(img => !currentUrlSet.has(img?.asset?.url));
    
    return availableImages.length > 0 
      ? availableImages[Math.floor(Math.random() * availableImages.length)]
      : allImages[Math.floor(Math.random() * allImages.length)];
  };

  // Initialize visible images
  useEffect(() => {
    if (allImages.length > 0) {
      setVisibleImages(getRandomImages(visibleCount));
    }
  }, [allImages, visibleCount]);

  // Animation effect
  useEffect(() => {
    if (allImages.length <= visibleCount) return;

    const interval = setInterval(() => {
        const numToReplace = Math.floor(Math.random() * 4) + 2; // Replace 2-5 images
        const indicesToReplace = getRandomIndices(numToReplace, visibleCount);
      
      // Start fade out
      setFadingOut(indicesToReplace);
      
      // After half duration, replace images
      setTimeout(() => {
        setVisibleImages(current => {
          const currentUrls = current.map(img => img?.asset?.url);
          const newImages = [...current];
          indicesToReplace.forEach(idx => {
            newImages[idx] = getNewImage(currentUrls) || newImages[idx];
          });
          return newImages;
        });
        
        // Fade back in
        setTimeout(() => {
          setFadingOut([]);
        }, fadeDuration / 2);
      }, fadeDuration / 2);
      
    }, intervalTime);

    return () => clearInterval(interval);
  }, [allImages, visibleCount, intervalTime, fadeDuration]);

  return children(visibleImages, fadingOut);
}