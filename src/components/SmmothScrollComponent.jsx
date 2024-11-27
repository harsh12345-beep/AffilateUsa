import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'; // Import everything


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Initialize ScrollSmoother for all devices, including mobile
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Adjust for smoothness (1 = normal speed)
      effects: true, // Enable effects for ScrollTrigger animations
    });

    // Fade-in animation for elements with the class 'fade-in'
    gsap.utils.toArray('.fade-in').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // Start animation when element enters the viewport
          end: "top center", // End animation closer to the center
          scrub: true, // Smooth animation synced with scrolling
        },
        opacity: 0, // Start completely transparent
        y: 100, // Start slightly below its final position
      });
    });

    return () => {
      // Cleanup on unmount
      smoother.kill(); // Remove ScrollSmoother instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup ScrollTriggers
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="relative overflow-hidden">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScrollProvider;
