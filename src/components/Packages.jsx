import { PACKAGES, ENHANCEMENTS, COORDINATION } from '../data/packages';
import './Packages.css';

export default function Packages() {
  return (
    <section id="packages" className="packages-band">
      <div className="wrap">
        <div className="section-eyebrow">Weddings</div>
        <h2 className="section-title">Sound, DJ &amp; emcee <em>packages</em></h2>
        <p className="section-sub">
          Every tier includes a 6-hour base. Choose the level of production that fits your day.
        </p>

        <div className="packages">
          {PACKAGES.map((pkg) => (
            <div className={`pkg${pkg.featured ? ' featured' : ''}`} key={pkg.name}>
              {pkg.badge && <div className="pkg-badge">{pkg.badge}</div>}
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="enh-block">
          <div className="section-eyebrow">Enhancements</div>
          <div className="enh-grid">
            {ENHANCEMENTS.map(([label, price]) => (
              <div className="enh-item" key={label}>
                <span>{label}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="coordination">
          <div className="section-eyebrow" style={{ marginTop: 56 }}>Coordination</div>
          <div className="coord-card">
            <div>
              <h3>{COORDINATION.name}</h3>
              <p>{COORDINATION.description}</p>
            </div>
            <div className="coord-price">{COORDINATION.price}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
