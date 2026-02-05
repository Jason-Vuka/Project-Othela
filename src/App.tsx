import { useState } from 'react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);

  const handleNoHover = () => {
    // Move the button to a random position
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
    setAttempts(prev => prev + 1);
  };

  const getNoButtonText = () => {
    if (attempts === 0) return 'No';
    if (attempts === 1) return 'Are you sure?';
    if (attempts === 2) return 'Really?';
    if (attempts === 3) return 'Think again!';
    if (attempts >= 4) return 'Please? 🥺';
  };

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-red-300 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6,
              }}
              size={20 + Math.random() * 30}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Bugs and Lola celebrating */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-end gap-4 animate-scale-in">
          <div className="relative">
            <ImageWithFallback
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a452ee-07db-4b3d-b876-9185b9799add/de0w4w3-4bb18257-58ca-42e3-82b2-a987587b76ad.png/v1/fill/w_943,h_847/lola_and_bugs_in_looney_tunes_cartoons_by_kareena08_de0w4w3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MCIsInBhdGgiOiIvZi84MGE0NTJlZS0wN2RiLTRiM2QtYjg3Ni05MTg1Yjk3OTlhZGQvZGUwdzR3My00YmIxODI1Ny01OGNhLTQyZTMtODJiMi1hOTg3NTg3Yjc2YWQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eKe5qBlCfdTD2cfdo-fW6WEGV4BIZ8RBM-CeRZHSufg?w=300&h=300&fit=crop"
              alt="Bugs Bunny"
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-2xl">😍</span>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a452ee-07db-4b3d-b876-9185b9799add/ddnh1wc-030b3f3a-1577-4120-9862-23464f72f6f0.png/v1/fit/w_768,h_431,q_70,strp/lola_bunny_tlts_original__space_jam__design_edit_1_by_kareena08_ddnh1wc-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMxIiwicGF0aCI6Ii9mLzgwYTQ1MmVlLTA3ZGItNGIzZC1iODc2LTkxODViOTc5OWFkZC9kZG5oMXdjLTAzMGIzZjNhLTE1NzctNDEyMC05ODYyLTIzNDY0ZjcyZjZmMC5wbmciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.JoOCSuIEYSMf9u8ORbbopyIeugg6W7dVRTlXkYw6EDU?w=300&h=300&fit=crop&flip=h"
              alt="Lola Bunny"
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-2xl">💕</span>
            </div>
          </div>
        </div>

        <div className="text-center z-10 animate-scale-in mb-32">
          <div className="mb-6">
            <Heart className="inline-block text-red-500 mb-4" size={80} fill="currentColor" />
          </div>
          <h1 className="text-6xl font-bold text-red-600 mb-4">Yay! 💕</h1>
          <p className="text-2xl text-red-700 mb-2">I knew you'd say yes!</p>
          <p className="text-xl text-red-600">Happy Valentine's Day Pretty girl! ❤️</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
      {/* Background image - whitewashed */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://i.pinimg.com/originals/98/d7/33/98d7331f20f4139d7206708f50bbfacc.jpg?w=1200&h=800&fit=crop"
          alt="Looney Tunes"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-red-300 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: 0.4,
            }}
            size={20 + Math.random() * 30}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <Heart className="inline-block text-red-500 mb-4 animate-heartbeat" size={80} fill="currentColor" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-8 animate-fade-in">
          Lola, will you be my Valentine? 💝
        </h1>
        
        <p className="text-xl text-red-700 mb-12 animate-fade-in-delay">
          I promise to make it special! 🌹
        </p>

        <div className="flex gap-6 justify-center items-center relative">
          {/* Yes button */}
          <button
            onClick={() => setAccepted(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all hover:scale-110 shadow-lg hover:shadow-xl"
          >
            Yes! 💖
          </button>

          {/* No button - moves on hover */}
          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-4 px-12 rounded-full text-xl transition-all shadow-lg absolute"
            style={{
              left: attempts === 0 ? 'auto' : `${noButtonPosition.x}px`,
              top: attempts === 0 ? 'auto' : `${noButtonPosition.y}px`,
              position: attempts === 0 ? 'relative' : 'fixed',
            }}
          >
            {getNoButtonText()}
          </button>
        </div>

        {attempts > 0 && (
          <p className="mt-8 text-red-600 animate-fade-in">
            The "Yes" button is looking pretty good, isn't it? 😊
          </p>
        )}
      </div>
    </div>
  );
}
