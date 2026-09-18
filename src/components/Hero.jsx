import Wave from './Wave';
import { waveHeights } from '../utils';
import heroImage from '../assets/dj-artist-musician-music-36500a-1024.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src={heroImage} alt="DJ performing with mixer and turntables" fetchpriority="high" />
      </div>
      <div className="hero-content">
        <div className="hero-wave-wrap">
          <Wave heights={waveHeights(9, 10, 34)} gap={4} barWidth={5} />
        </div>
        <div className="hero-eyebrow">Bowling Green, Kentucky</div>
        <h1>Hear <em>After</em><br />Entertainment</h1>
        <p className="hero-tag">The soundtrack to your story.</p>
        <div className="hero-cta-row">
          <a className="btn-primary" href="#contact">Check Your Date</a>
          <a className="btn-ghost" href="#packages">View Packages</a>
        </div>
      </div>
    </section>
  );
}
