import { useEffect, useRef, useState } from 'react';
import introVideoSrc from '../assets/hear-after-intro.mp4';
import './IntroVideo.css';

const SESSION_KEY = 'hn_intro_seen';

export default function IntroVideo() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY));
  const [closing, setClosing] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const skipBtnRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = 'hidden';

    // Remember what had focus before the overlay opened, then move focus in
    previouslyFocused.current = document.activeElement;
    skipBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  // Escape to skip, and a simple focus trap while open
  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        dismiss();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = [videoRef.current, skipBtnRef.current].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      // Return focus to wherever it was before the overlay opened
      previouslyFocused.current?.focus?.();
    }, 500);
  };

  return (
    <div
      className={`intro-overlay${closing ? ' is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Hear After Entertainment intro video"
    >
      <video
        ref={videoRef}
        className="intro-video"
        src={introVideoSrc}
        autoPlay
        muted={muted}
        playsInline
        onEnded={dismiss}
        onError={dismiss}
      />
      <div className="intro-controls">
        <button
          className="intro-mute"
          onClick={() => setMuted((m) => !m)}
          type="button"
          aria-label={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 9v6h4l5 5V4L8 9H4Z" />
              <path d="M16 9l5 6M21 9l-5 6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 9v6h4l5 5V4L8 9H4Z" />
              <path d="M16.5 8.5a5 5 0 0 1 0 7M19.5 6a9 9 0 0 1 0 12" strokeLinecap="round" />
            </svg>
          )}
        </button>
        <button ref={skipBtnRef} className="intro-skip" onClick={dismiss} type="button">
          Skip
        </button>
      </div>
    </div>
  );
}