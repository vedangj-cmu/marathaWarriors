import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, BookOpen, Shield, Mountain, Award, Users, Scissors, Sword } from 'lucide-react';

// Import warrior background images
import tanajiImage from './assets/warriors/tanaji-malusare.avif';
import kondajiImage from './assets/warriors/kondaji-farzand.avif';
import hambirraoImage from './assets/warriors/hambirrao-mohite.avif';
import shivaImage from './assets/warriors/shiva-kashid.avif';
import dhangariImage from './assets/warriors/dhangari-mavala.avif';
import bajiImage from './assets/warriors/bajipradhu-deshpande.avif';

// Import warrior face images
import tanajiFace from './assets/warriors/tanaji-face.jpg';
import kondajiFace from './assets/warriors/kondaji-face.jpg';
import hambirraoFace from './assets/warriors/hambirrao-face.jpg';
import shivaFace from './assets/warriors/shiva-face.jpg';
import bajiFace from './assets/warriors/baji-face.jpg';

// --- DATA ---
// Sourced from "The Vanguard of Swarajya: A Historiographical Analysis of the Maratha Military Ethos (1645–1689)"
const warriorsData = [
    {
        id: 'tanaji',
        name: { en: 'Tanaji Malusare', hi: 'तानाजी मालुसरे' },
        title: { en: 'The Lion of Sinhagad', hi: 'सिंहगड का सिंह' },
        icon: <Sword size={48} />,
        faceImage: tanajiFace,
        color: 'from-orange-500 to-red-600',
        imgPlaceholder: tanajiImage,
        details: {
            en: (
                <>
                    <p className="mb-4">
                        <strong>Role:</strong> Subedar & Childhood Companion<br />
                        <strong>Key Battle:</strong> Battle of Sinhagad (Feb 4, 1670)
                    </p>
                    <p className="mb-4">
                        Tanaji prioritized the call of Swarajya over his own son's wedding. He led a surgical strike scaling the vertical Donagiri cliff of Kondhana fort with 300 Mavalas.
                    </p>
                    <p className="mb-4">
                        Fighting the Mughal commander Udaybhan Rathod, Tanaji fell in combat. His sacrifice led to the victory, prompting Shivaji Maharaj to say, <em>"Gad aala, pan Sinha gela"</em> (The Fort is captured, but the Lion is lost).
                    </p>
                </>
            ),
            hi: (
                <>
                    <p className="mb-4">
                        <strong>भूमिका:</strong> सुभेदार और बाल सखा<br />
                        <strong>प्रमुख युद्ध:</strong> सिंहगड का युद्ध (४ फरवरी, १६७०)
                    </p>
                    <p className="mb-4">
                        तानाजी ने स्वराज्य के आह्वान को अपने पुत्र के विवाह से ऊपर रखा। उन्होंने ३०० मावलों के साथ कोंढाणा किले की सीधी दोनागिरी चट्टान को पार कर सर्जिकल स्ट्राइक की।
                    </p>
                    <p className="mb-4">
                        मुगल सेनापति उदयभान राठौड़ से लड़ते हुए तानाजी वीरगति को प्राप्त हुए। उनके बलिदान ने विजय दिलाई, जिस पर शिवाजी महाराज ने कहा, <em>"गड आला, पण सिंह गेला"</em> (गढ़ आया, पर सिंह गया)।
                    </p>
                </>
            )
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
        details: {
            en: (
                <>
                    <p className="mb-4">
                        <strong>Role:</strong> General & "Farzand" (Favored Son)<br />
                        <strong>Key Feat:</strong> Capture of Panhala (1673)
                    </p>
                    <p className="mb-4">
                        Kondaji led a vanguard of merely <strong>60 chosen warriors</strong> against a garrison of 2,500 enemies. Using disguise and stealth, they infiltrated Panhala on the night of March 6, 1673.
                    </p>
                    <p className="mb-4">
                        The fort was captured in less than three and a half hours. Later, he sacrificed his life in a high-stakes intelligence operation attempting to neutralize the Janjira sea fort.
                    </p>
                </>
            ),
            hi: (
                <>
                    <p className="mb-4">
                        <strong>भूमिका:</strong> सेनापति और "फर्जंद" (प्रिय पुत्र)<br />
                        <strong>प्रमुख उपलब्धि:</strong> पन्हाला की विजय (१६७३)
                    </p>
                    <p className="mb-4">
                        कोंडाजी ने २५०० दुश्मनों की गैरीसन के खिलाफ केवल <strong>६० चुने हुए योद्धाओं</strong> के दस्ते का नेतृत्व किया। भेष बदलकर और गोपनीयता का उपयोग करते हुए, उन्होंने ६ मार्च १६७३ की रात पन्हाला में घुसपैठ की।
                    </p>
                    <p className="mb-4">
                        साढ़े तीन घंटे से भी कम समय में किला जीत लिया गया। बाद में, जंजीरा समुद्री किले को निष्क्रिय करने के प्रयास में एक उच्च-जोखिम वाले खुफिया अभियान में उन्होंने अपने प्राणों की आहुति दी।
                    </p>
                </>
            )
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
        details: {
            en: (
                <>
                    <p className="mb-4">
                        <strong>Role:</strong> Sarnobat (Commander-in-Chief)<br />
                        <strong>Key Moment:</strong> Succession of 1680
                    </p>
                    <p className="mb-4">
                        Following Shivaji Maharaj's death, Hambirrao rejected a palace coup and pledged loyalty to Sambhaji, preventing civil war.
                    </p>
                    <p className="mb-4">
                        He executed the daring Sack of Burhanpur (1681) and fell in the Battle of Wai (1687) after a cannonball strike. He was the last of the "Old Guard".
                    </p>
                </>
            ),
            hi: (
                <>
                    <p className="mb-4">
                        <strong>भूमिका:</strong> सरनौबत (सेनापति)<br />
                        <strong>प्रमुख क्षण:</strong> १६८० का उत्तराधिकार
                    </p>
                    <p className="mb-4">
                        शिवाजी महाराज की मृत्यु के बाद, हंबीरराव ने महल के षड्यंत्र को खारिज कर दिया और संभाजी के प्रति निष्ठा की प्रतिज्ञा की, जिससे गृहयुद्ध टल गया।
                    </p>
                    <p className="mb-4">
                        उन्होंने बुरहानपुर की लूट (१६८१) को अंजाम दिया और वाई की लड़ाई (१६८७) में तोप का गोला लगने से वीरगति को प्राप्त हुए। वह "पुराने रक्षकों" में अंतिम थे।
                    </p>
                </>
            )
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
        details: {
            en: (
                <>
                    <p className="mb-4">
                        <strong>Role:</strong> Barber & Decoy<br />
                        <strong>Key Act:</strong> Escape from Panhala (1660)
                    </p>
                    <p className="mb-4">
                        A barber by profession who resembled Shivaji Maharaj. He volunteered to dress in royal regalia and act as a decoy to distract Siddi Jauhar's army.
                    </p>
                    <p className="mb-4">
                        His capture and subsequent execution bought crucial hours for the real Shivaji to escape to Vishalgad. His sacrifice represents the democratization of the Swarajya ideal.
                    </p>
                </>
            ),
            hi: (
                <>
                    <p className="mb-4">
                        <strong>भूमिका:</strong> नाई और प्रतिरूप (Decoy)<br />
                        <strong>प्रमुख कार्य:</strong> पन्हाला से पलायन (१६६०)
                    </p>
                    <p className="mb-4">
                        पेशे से नाई, जो शिवाजी महाराज जैसे दिखते थे। उन्होंने सिद्दी जौहर की सेना का ध्यान भटकाने के लिए शाही पोशाक पहनकर प्रतिरूप बनने की स्वेच्छा दिखाई।
                    </p>
                    <p className="mb-4">
                        उनकी गिरफ्तारी और बाद में निष्पादन ने असली शिवाजी को विशालगढ़ भागने के लिए महत्वपूर्ण घंटे प्रदान किए। उनका बलिदान स्वराज्य आदर्श के लोकतंत्रीकरण का प्रतीक है।
                    </p>
                </>
            )
        }
    },
    {
        id: 'dhangar',
        name: { en: 'The Dhangar Mavala', hi: 'धनगर मावला' },
        title: { en: 'Indigenous Intelligence', hi: 'स्वदेशी खुफिया नेटवर्क' },
        icon: <Users size={48} />,
        faceImage: null, // No face image available for this warrior
        color: 'from-green-600 to-emerald-700',
        imgPlaceholder: dhangariImage,
        details: {
            en: (
                <>
                    <p className="mb-4">
                        <strong>Role:</strong> Pastoralists & Guides<br />
                        <strong>Contribution:</strong> Logistics & Intelligence
                    </p>
                    <p className="mb-4">
                        Semi-nomadic shepherds of the Western Ghats. Their encyclopedic knowledge of hidden trails was superior to any Mughal map.
                    </p>
                    <p className="mb-4">
                        They acted as an organic intelligence agency, spotting enemy movements while grazing flocks, and supplied forts with essential dairy and wool.
                    </p>
                </>
            ),
            hi: (
                <>
                    <p className="mb-4">
                        <strong>भूमिका:</strong> पशुपालक और मार्गदर्शक<br />
                        <strong>योगदान:</strong> रसद और खुफिया जानकारी
                    </p>
                    <p className="mb-4">
                        पश्चिमी घाट के अर्ध-खानाबदोश चरवाहे। छिपे हुए रास्तों का उनका ज्ञान किसी भी मुगल मानचित्र से बेहतर था।
                    </p>
                    <p className="mb-4">
                        उन्होंने एक जैविक खुफिया एजेंसी के रूप में कार्य किया, अपने झुंडों को चराते समय दुश्मन की गतिविधियों पर नज़र रखी, और किलों को आवश्यक दूध और ऊन की आपूर्ति की।
                    </p>
                </>
            )
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
        details: {
            en: (
                <>
                    <p className="mb-4">
                        <strong>Role:</strong> Deshmukh & Rearguard Commander<br />
                        <strong>Battle:</strong> Battle of Ghod Khind (July 13, 1660)
                    </p>
                    <p className="mb-4">
                        Baji Prabhu and 300 soldiers held the narrow pass against thousands of Bijapuri troops for 18 hours to allow Shivaji to reach Vishalgad safely.
                    </p>
                    <p className="mb-4">
                        Wielding dual <em>Dand-Pattas</em>, he fought until the signal cannons fired, saving the Maratha state from decapitation. The pass was renamed <em>Pavan Khind</em> (Sacred Pass).
                    </p>
                </>
            ),
            hi: (
                <>
                    <p className="mb-4">
                        <strong>भूमिका:</strong> देशमुख और रियरगार्ड कमांडर<br />
                        <strong>युद्ध:</strong> घोडखिंड का युद्ध (१३ जुलाई, १६६०)
                    </p>
                    <p className="mb-4">
                        बाजी प्रभु और ३०० सैनिकों ने शिवाजी को विशालगढ़ सुरक्षित पहुँचाने के लिए १८ घंटे तक हजारों बीजापुरी सैनिकों के खिलाफ संकीर्ण दर्रे को रोके रखा।
                    </p>
                    <p className="mb-4">
                        दोहरे <em>दंड-पट्टा</em> चलाते हुए, उन्होंने तोपों की आवाज़ सुनने तक लड़ाई लड़ी, जिससे मराठा राज्य का अस्तित्व बच गया। दर्रे का नाम बदलकर <em>पावनखिंड</em> (पवित्र दर्रा) कर दिया गया।
                    </p>
                </>
            )
        }
    }
];

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
                                {warrior.details[lang]}
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