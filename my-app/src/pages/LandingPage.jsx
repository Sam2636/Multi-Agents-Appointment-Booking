import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import heroImage from '../image/hero.png';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';

const words = ["Intelligent", "Powerful", "Secure", "Personal"];

const LandingPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Header />
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Your <br className="md:hidden" />
            <span className="relative inline-block min-w-[300px] h-[1.2em] align-top">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 right-0 text-center bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            Multi-Agent Assistant
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light italic max-w-2xl">
            “Smarter. Faster. More personal.”
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 bg-blue-600 hover:bg-blue-500 text-white border-none"
              onClick={() => navigate('/chat')}
            >
              Start Chatting →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
