import Wave from './Wave';
import { waveHeights } from '../utils';
import './Mission.css';

export default function Mission() {
  return (
    <section id="mission" className="mission-band">
      <div className="wrap">
        <Wave heights={waveHeights(6, 18, 60)} gap={3} barWidth={8} />
        <p className="mission-text">
          From the first dance to the final toast, we bring sound, coordination,
          and creativity together to make your <em>story</em> unforgettable.
        </p>
      </div>
    </section>
  );
}
