import { Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const HeartComp = ({ isOpen, setIsOpen }) => {
  const handleHeartClick = () => {
    setIsOpen(true);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          onClick={handleHeartClick}
          className="absolute h-48 w-48 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 md:h-64 md:w-64"
          aria-label="Click to open the heart and reveal photos"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 30,
            transition: { duration: 2, ease: "easeOut" },
          }}
        >
          <Heart className="inset-0 h-full w-full fill-red-500 text-red-500 animate-pulse" />
          <span className="sr-only">Click this heart to reveal a surprise!</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default HeartComp;
