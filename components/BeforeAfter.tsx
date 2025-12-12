import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseDown = () => (isDragging.current = true);
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => (isDragging.current = false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-serene-900 mb-4">Resultados Reais</h2>
          <p className="text-satin-800/60 font-sans">Arraste para ver a transformação.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* After Image (Background) */}
            <img 
              src="https://media.istockphoto.com/id/2157073168/pt/foto/portrait-of-attractive-brunette-long-haired-woman-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=Opiwx9Sen8IeSsSZ912gpwkYW9hAKSE-uDmlesuUsEY=" 
              alt="Depois" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before Image (Foreground - Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full object-cover overflow-hidden bg-gray-200"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg" 
                alt="Antes" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Antes
              </div>
            </div>

            {/* Label After */}
             <div className="absolute top-4 right-4 bg-serene-500/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Depois
              </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-serene-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronsLeftRight size={20} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};