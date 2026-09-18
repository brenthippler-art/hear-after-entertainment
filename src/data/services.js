import weddingDjImage from '../assets/weddingdj.avif';
import coordinatorImage from '../assets/coordinator.webp';
import photoboothImage from '../assets/photobooth.jpg';

export const SERVICES = [
  {
    num: 'SOUND',
    title: 'Live Sound, DJ & Emcee',
    desc: 'Professional sound, music curation, and emceeing for events of every size and kind.',
  },
  {
    num: 'CAPTURE',
    title: 'Photo Booths',
    desc: "Custom-branded photo booth with instant prints. Photos sent to guests' phones, a master set delivered to you, and a full photo book after.",
  },
  {
    num: 'TIMELINE',
    title: 'Day-of Coordination',
    desc: "Vendor coordination, rehearsal management, and full day-of oversight — so you're free to be present.",
  },
  {
    num: 'SCORE',
    title: 'Custom Songwriting',
    desc: 'An original song written for your moment — a first dance, a vow renewal, a milestone anniversary.',
  },
  {
    num: 'VOWS',
    title: 'Officiating',
    desc: 'A licensed officiant to write and lead your ceremony — personal, heartfelt, and made entirely your own.',
  },
];

export const GALLERY_IMAGES = [
  { src: weddingDjImage, alt: 'DJ booth setup', className: '' },
  { src: coordinatorImage, alt: 'Day-of coordination in action', className: 'g-img-right' },
  { src: photoboothImage, alt: 'Wedding photo booth', className: 'g-img-crop-top' },
];