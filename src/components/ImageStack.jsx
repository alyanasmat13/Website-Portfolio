import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/Website-Portfolio/src/assets/landscapes/img1.jpg",
    "/Website-Portfolio/src/assets/landscapes/img2.jpg",
    "/Website-Portfolio/src/assets/landscapes/img3.jpg",
    "/Website-Portfolio/src/assets/landscapes/img4.jpg",
    "/Website-Portfolio/src/assets/landscapes/img5.jpg",
    "/Website-Portfolio/src/assets/landscapes/img6.jpg",
    "/Website-Portfolio/src/assets/landscapes/img7.jpg",
    "/Website-Portfolio/src/assets/landscapes/img8.jpg",
    "/Website-Portfolio/src/assets/landscapes/img9.jpg"
  ];

  const handleHover = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="image-stack" onMouseEnter={handleHover}>
      <AnimatePresence>
        {images.map((src, index) => (
          <motion.div
            key={src}
            className="stack-image"
            initial={{ 
              rotateZ: 2 * (index + 1),
              x: 5 * (index + 1),
              opacity: index === currentIndex ? 1 : 0.6 
            }}
            animate={{ 
              rotateZ: index === currentIndex ? 0 : 2 * (index + 1),
              x: index === currentIndex ? 0 : 5 * (index + 1),
              opacity: index === currentIndex ? 1 : 0.6
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ zIndex: index === currentIndex ? 3 : 2 - index }}
          >
            <img src={src} alt={`Landscape ${index + 1}`} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageStack;