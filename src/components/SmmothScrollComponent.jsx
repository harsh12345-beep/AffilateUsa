import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SmoothScrollComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.scroll-element', {
      scrollTrigger: {
        trigger: '.scroll-element',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      y: 100,
    });
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <section className="scroll-element">
        <h2>Section 1</h2>
        <p>This section animates on scroll.</p>
      </section>
      <section className="scroll-element">
        <h2>Section 2</h2>
        <p>This section also animates on scroll.</p>
      </section>
    </div>
  );
};

export default SmoothScrollComponent;
