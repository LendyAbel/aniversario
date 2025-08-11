import { Heart } from 'lucide-react'
import { AnimatePresence } from 'motion/react'

const HeartComp = ({ setIsOpen }) => {
  const handleHeartClick = () => {
    setIsOpen(true)
  }

  return (
    <AnimatePresence>
      <button
        onClick={handleHeartClick}
        className='relative h-48 w-48 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 md:h-64 md:w-64'
        aria-label='Click to open the heart and reveal photos'
      >
        <Heart className='absolute inset-0 h-full w-full fill-red-500 text-red-500 animate-pulse' />
        <span className='sr-only'>Click this heart to reveal a surprise!</span>
      </button>
    </AnimatePresence>
  )
}

export default HeartComp
