import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../utils';
import './About.css';

const aboutImageModules = import.meta.glob('../assets/aboutscroll/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const aboutImages = Object.entries(aboutImageModules).map(([path, src]) => {
  const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
  const alt = filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { src, alt: `${alt} — Hear After Entertainment` };
});

export default function About() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return; // stay on the first image, no auto-rotation
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section id="about">
      <div className="wrap">
        <div className="about">
          <div>
            <div className="section-eyebrow">About Us</div>
            <h2>A family-run entertainment company, rooted in Bowling Green</h2>
            <p>
              Hear After Entertainment is run by husband-and-wife team Brenton and
              Brittany Hippler.
            </p>
            <p>
              We've spent years in the wedding and events industry, formerly working
              for our parents, Scott and Jefilyn Hippler, at Power Blast Events before
              they moved to Florida. Now we're back in the wedding service space,
              bringing the same professional, yet personal touches we learned at
              Power Blast — with a style all our own.
            </p>
            <p>
              Every event is treated like it's the only one on the calendar. That's
              not a tagline — it's because we treat every couple how we would want to
              be treated.
            </p>
            <p>
              Hear After Entertainment is about taking the stress of planning off
              your hands, so you can simply live in the moment, and carry these
              memories into the hereafter.
            </p>
          </div>
          <div className="about-img">
            {aboutImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className={i === index ? 'is-active' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}