import IntroVideo from './components/IntroVideo';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Packages from './components/Packages';
import About from './components/About';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <IntroVideo />
      <Nav />
      <Hero />
      <Mission />
      <Services />
      <Packages />
      <About />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
}
