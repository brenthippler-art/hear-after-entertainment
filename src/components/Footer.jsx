import Wave from './Wave';
import { waveHeights } from '../utils';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <a className="footer-logo" href="#top">
            <Wave heights={waveHeights(5, 5, 15)} gap={2} barWidth={3} radius="1px" />
            <span style={{ fontFamily: "'Fraunces',serif", fontSize: 16 }}>
              Hear <em style={{ fontStyle: 'italic', color: 'var(--brass-soft)' }}>After</em>
            </span>
          </a>
          <div className="footer-links">
            <div>
              <div>Explore</div>
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#about">About</a>
            </div>
            <div>
              <div>Contact</div>
              <a href="tel:2704386442">Brenton (270) 438-6442</a>
              <a href="tel:2707999435">Brittany (270) 799-9435</a>
              <a href="mailto:brenton@hearafterent.com">brenton@hearafterent.com</a>
              <a href="mailto:brittany@hearafterent.com">brittany@hearafterent.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Hear After Entertainment</span>
          <span>Bowling Green, Kentucky</span>
        </div>
      </div>
    </footer>
  );
}
