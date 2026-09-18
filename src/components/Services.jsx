import { SERVICES, GALLERY_IMAGES } from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-eyebrow">What We Do</div>
        <h2 className="section-title">Five ways we show up <em>for you</em></h2>
        <p className="section-sub">
          Weddings, corporate events, and private celebrations of every kind — built
          around sound, story, and the details that make a day unforgettable.
        </p>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="gallery-strip">
          {GALLERY_IMAGES.map((img) => (
            <div className="g-item" key={img.alt}>
              <img src={img.src} alt={img.alt} className={img.className} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}