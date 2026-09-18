import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Honeypot check — if this hidden field has a value, it was filled by a bot.
    // Silently succeed without sending, so bots don't learn to look elsewhere.
    const honeypot = formRef.current.elements.namedItem('company');
    if (honeypot && honeypot.value) {
      setStatus('sent');
      setForm({ name: '', email: '', date: '', message: '' });
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', date: '', message: '' });
      })
      .catch(() => setStatus('error'));
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">Let's talk about <em>your</em> day</h2>
        <p className="section-sub">
          Tell us your date and what you're planning — we'll follow up to check
          availability and walk through packages.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="item">
              <div className="label">Phone</div>
              <div className="val">Brenton (270) 438-6442</div>
              <div className="val">Brittany (270) 799-9435</div>
            </div>
            <div className="item">
              <div className="label">Email</div>
              <div className="val">brenton@hearafterent.com</div>
              <div className="val">brittany@hearafterent.com</div>
            </div>
            <div className="item">
              <div className="label">Based In</div>
              <div className="val">Bowling Green, Kentucky</div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            {/* Honeypot field — hidden from sighted and AT users, bots fill it anyway */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="date">Event Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your event"
              />
            </div>

            <button className="btn-submit" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {status === 'sent' && "Thanks — we'll be in touch soon."}
              {status === 'error' && 'Something went wrong — please try again or email us directly.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}