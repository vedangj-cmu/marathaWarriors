import React from 'react';
import { Sword, Shield, Award, Scissors, Users, Mountain } from 'lucide-react';

// Import warrior background images
import tanajiImage from '../assets/warriors/tanaji-malusare.avif';
import kondajiImage from '../assets/warriors/kondaji-farzand.avif';
import hambirraoImage from '../assets/warriors/hambirrao-mohite.avif';
import shivaImage from '../assets/warriors/shiva-kashid.avif';
import dhangariImage from '../assets/warriors/dhangari-mavala.avif';
import bajiImage from '../assets/warriors/bajipradhu-deshpande.avif';

// Import warrior face images
import tanajiFace from '../assets/warriors/tanaji-face.jpg';
import kondajiFace from '../assets/warriors/kondaji-face.jpg';
import hambirraoFace from '../assets/warriors/hambirrao-face.jpg';
import shivaFace from '../assets/warriors/shiva-face.jpg';
import bajiFace from '../assets/warriors/baji-face.jpg';

// Import English content
import tanajiEn from './warriors/en/tanaji';
import kondajiEn from './warriors/en/kondaji';
import hambirraoEn from './warriors/en/hambirrao';
import shivaEn from './warriors/en/shiva';
import dhangarEn from './warriors/en/dhangar';
import bajiEn from './warriors/en/baji';

// Import Hindi content
import tanajiHi from './warriors/hi/tanaji';
import kondajiHi from './warriors/hi/kondaji';
import hambirraoHi from './warriors/hi/hambirrao';
import shivaHi from './warriors/hi/shiva';
import dhangarHi from './warriors/hi/dhangar';
import bajiHi from './warriors/hi/baji';

// Helper function to render content as JSX
export const renderContent = (content) => {
  return (
    <>
      <p className="mb-4">
        <strong>{content.role.includes(':') ? content.role.split(':')[0] + ':' : 'Role:'}</strong> {content.role.includes(':') ? content.role.split(':')[1] : content.role}<br />
        <strong>{content.keyEvent.includes('Battle') || content.keyEvent.includes('युद्ध') ? (content.keyEvent.includes('युद्ध') ? 'प्रमुख युद्ध:' : 'Key Battle:') : content.keyEvent.includes('उपलब्धि') ? 'प्रमुख उपलब्धि:' : content.keyEvent.includes('क्षण') ? 'प्रमुख क्षण:' : content.keyEvent.includes('कार्य') ? 'प्रमुख कार्य:' : content.keyEvent.includes('योगदान') ? 'योगदान:' : content.keyEvent.includes('Feat') ? 'Key Feat:' : content.keyEvent.includes('Moment') ? 'Key Moment:' : content.keyEvent.includes('Act') ? 'Key Act:' : content.keyEvent.includes('Contribution') ? 'Contribution:' : content.keyEvent.includes('Logistics') ? 'Contribution:' : 'Key Event:'}</strong> {content.keyEvent}
      </p>
      {content.paragraphs.map((para, index) => (
        <p key={index} className="mb-4">
          {para}
        </p>
      ))}
    </>
  );
};

// Warriors data with metadata and content references
export const warriorsData = [
  {
    id: 'tanaji',
    name: { en: 'Tanaji Malusare', hi: 'तानाजी मालुसरे' },
    title: { en: 'The Lion of Sinhagad', hi: 'सिंहगड का सिंह' },
    icon: <Sword size={48} />,
    faceImage: tanajiFace,
    color: 'from-orange-500 to-red-600',
    imgPlaceholder: tanajiImage,
    content: {
      en: tanajiEn,
      hi: tanajiHi
    }
  },
  {
    id: 'kondaji',
    name: { en: 'Kondaji Farzand', hi: 'कोंडाजी फर्जंद' },
    title: { en: 'Master of Covert Warfare', hi: 'गुप्त युद्ध के स्वामी' },
    icon: <Shield size={48} />,
    faceImage: kondajiFace,
    color: 'from-amber-600 to-orange-700',
    imgPlaceholder: kondajiImage,
    content: {
      en: kondajiEn,
      hi: kondajiHi
    }
  },
  {
    id: 'hambirrao',
    name: { en: 'Hambirrao Mohite', hi: 'हंबीरराव मोहिते' },
    title: { en: 'The Constitutional Defender', hi: 'संवैधानिक रक्षक' },
    icon: <Award size={48} />,
    faceImage: hambirraoFace,
    color: 'from-orange-600 to-red-700',
    imgPlaceholder: hambirraoImage,
    content: {
      en: hambirraoEn,
      hi: hambirraoHi
    }
  },
  {
    id: 'shiva',
    name: { en: 'Shiva Kashid', hi: 'शिवा काशीद' },
    title: { en: 'The Royal Doppelganger', hi: 'शाही प्रतिरूप' },
    icon: <Scissors size={48} />,
    faceImage: shivaFace,
    color: 'from-yellow-600 to-orange-600',
    imgPlaceholder: shivaImage,
    content: {
      en: shivaEn,
      hi: shivaHi
    }
  },
  {
    id: 'dhangar',
    name: { en: 'Dhangar Mavala', hi: 'धनगर मावला' },
    title: { en: 'Indigenous Intelligence', hi: 'स्वदेशी खुफिया नेटवर्क' },
    icon: <Users size={48} />,
    faceImage: null,
    color: 'from-green-600 to-emerald-700',
    imgPlaceholder: dhangariImage,
    content: {
      en: dhangarEn,
      hi: dhangarHi
    }
  },
  {
    id: 'baji',
    name: { en: 'Baji Prabhu Deshpande', hi: 'बाजी प्रभु देशपांडे' },
    title: { en: 'Defender of Pavan Khind', hi: 'पावनखिंड के रक्षक' },
    icon: <Mountain size={48} />,
    faceImage: bajiFace,
    color: 'from-red-600 to-rose-800',
    imgPlaceholder: bajiImage,
    content: {
      en: bajiEn,
      hi: bajiHi
    }
  }
];
