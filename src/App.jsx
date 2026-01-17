import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, BookOpen, Shield } from 'lucide-react';
import { warriorsData } from './content/index.jsx';
import WarriorContent from './components/WarriorContent';

// --- DATA ---
// Sourced from "The Vanguard of Swarajya: A Historiographical Analysis of the Maratha Military Ethos (1645–1689)"
// Data now imported from ./content/index.js

const WarriorSection = ({ warrior, lang }) => {
    const containerRef = useRef(null);
    const [activeStage, setActiveStage] = useState(0); // 0 = Title, 1 = Details

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Calculate intersection ratio to determine stage
                    // We want the transition to happen as the user scrolls into the second half of the section
                    if (entry.isIntersecting) {
                        // This logic relies on the section being tall enough (200vh)
                        // We can check intersection rect relative to root
                    }
                });
            },
            { threshold: [0, 0.5, 1.0] }
        );

        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // If the top of the container is above the middle of the screen, show details
            // Adjust threshold as needed
            if (rect.top < -viewportHeight * 0.2) {
                setActiveStage(1);
            } else {
                setActiveStage(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative h-[180vh] w-full bg-orange-50">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={warrior.imgPlaceholder}
                        alt="Background"
                        className={`h-full w-full object-cover transition-all duration-1000 ${activeStage === 1 ? 'scale-110 blur-sm opacity-40' : 'scale-100 opacity-60'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${warrior.color} mix-blend-multiply opacity-80`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent opacity-100" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">

                    {/* Title State */}
                    <div
                        className={`transition-all duration-700 transform ${activeStage === 0
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 -translate-y-20 scale-90 pointer-events-none'
                            } flex flex-col items-center`}
                    >
                        <div className="text-white mb-6 animate-pulse">
                            {warrior.icon}
                        </div>
                        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2 tracking-wide uppercase font-serif">
                            {warrior.name[lang]}
                        </h1>
                        <h2 className="text-2xl font-bold text-orange-100 drop-shadow-md">
                            {warrior.title[lang]}
                        </h2>
                        <div className="mt-12 animate-bounce text-white opacity-80">
                            <ChevronDown size={32} />
                        </div>
                    </div>

                    {/* Details State - "Pops up" */}
                    <div
                        className={`absolute top-0 bottom-0 left-0 right-0 p-6 md:p-12 transition-all duration-700 transform flex items-end ${activeStage === 1
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-full'
                            }`}
                    >
                        <div className="bg-white/95 backdrop-blur-md rounded-t-3xl shadow-2xl p-8 border-t-4 border-orange-500 max-h-[85vh] overflow-y-auto w-full">
                            <div className="flex items-center gap-4 mb-6 border-b border-orange-200 pb-4">
                                <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${warrior.color} shadow-lg overflow-hidden border-4 border-white`}>
                                    {warrior.faceImage ? (
                                        <img
                                            src={warrior.faceImage}
                                            alt={warrior.name[lang]}
                                            className="w-full h-full object-cover object-top scale-125"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white">
                                            {warrior.icon}
                                        </div>
                                    )}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-gray-900">{warrior.name[lang]}</h3>
                                    <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">{warrior.title[lang]}</span>
                                </div>
                            </div>

                            <div className="text-lg md:text-xl text-gray-800 leading-relaxed text-left font-medium font-serif">
                                <WarriorContent content={warrior.content[lang]} lang={lang} />
                            </div>

                            <div className="mt-8 flex items-center justify-center text-orange-400 opacity-50">
                                <Shield size={24} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [lang, setLang] = useState('en');

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'hi' : 'en');
    };

    return (
        <div className="bg-orange-50 min-h-screen font-sans selection:bg-orange-200">

            {/* Intro Header */}
            <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-600 to-red-700 text-white p-6 text-center shadow-xl z-20 relative">
                <BookOpen size={48} className="mb-4 opacity-80" />
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-serif">
                    {lang === 'en' ? 'The Vanguard of Swarajya' : 'स्वराज्य के अग्रदूत'}
                </h1>
                <p className="text-xl md:text-2xl font-light text-orange-100 max-w-2xl">
                    {lang === 'en' ? 'The Heroes Behind the Maratha Empire' : 'मराठा साम्राज्य के पीछे के महानायक'}
                </p>
                <p className="mt-8 text-sm opacity-60">
                    {lang === 'en' ? 'Scroll to Explore' : 'देखने के लिए स्क्रॉल करें'}
                </p>
                <div className="mt-4 animate-bounce">
                    <ChevronDown size={24} />
                </div>
            </div>

            {/* Warrior Sections */}
            <div className="flex flex-col">
                {warriorsData.map((warrior) => (
                    <WarriorSection key={warrior.id} warrior={warrior} lang={lang} />
                ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-900 text-orange-100 p-12 text-center">
                <h2 className="text-2xl font-bold mb-4 font-serif">
                    {lang === 'en' ? 'Jai Bhavani, Jai Shivaji' : 'जय भवानी, जय शिवाजी'}
                </h2>
                <p className="opacity-60 text-sm">
                    {lang === 'en' ? 'Based on historical records and bakhars.' : 'ऐतिहासिक अभिलेखों और बखरों पर आधारित।'}
                </p>
            </div>

            {/* Sticky Language Toggle */}
            <button
                onClick={toggleLang}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
            >
                <Globe size={20} />
                <span className="font-bold tracking-wide">
                    {lang === 'en' ? 'हिंदी' : 'English'}
                </span>
            </button>

        </div>
    );
};

export default App;