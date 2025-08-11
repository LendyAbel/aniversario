import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const photoPaths = [
  '/images/foto1.jpg',
  '/images/foto2.jpg',
  '/images/foto3.jpg',
  '/images/foto4.jpg',
  '/images/foto5.jpg',
  '/images/foto6.jpg',
  '/images/foto7.jpg',
  '/images/foto8.jpg',
]

const Page = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const carouselRef = useRef < HTMLDivElement > null

  const numPhotos = photoPaths.length
  const anglePerPhoto = 360 / numPhotos

  const photoWidth = 310
  const radius = Math.round(photoWidth / 2 / Math.tan(Math.PI / numPhotos))

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % numPhotos)
    }, 2000)
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [numPhotos])

  const carouselVariants = {
    initial: { rotateY: 0 },
    animate: {
      rotateY: -currentPhotoIndex * anglePerPhoto,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        mass: 1,
      },
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 2, ease: 'easeOut' } }}
        className='flex flex-col items-center space-y-8 w-full max-w-4xl gap-10'
      >
        <h1 className='text-4xl font-bold text-red-600 md:text-5xl lg:text-6xl text-center'>
          Feliz aniversario, mi amor!!!
        </h1>

        <div className='relative w-full h-80 flex items-center justify-center' style={{ perspective: '1000px' }}>
          <motion.div
            ref={carouselRef}
            className='relative w-full h-full preserve-3d'
            variants={carouselVariants}
            initial='initial'
            animate='animate'
          >
            {photoPaths.map((path, index) => (
              <div
                key={index}
                className='absolute w-full h-full flex items-center justify-center backface-hidden'
                style={{
                  transform: `rotateY(${index * anglePerPhoto}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={path || '/placeholder.svg'}
                  alt={`Anniversary Photo ${index + 1}`}
                  className='w-[200px] h-60 object-cover rounded-lg shadow-lg'
                />
              </div>
            ))}
          </motion.div>
        </div>
        <p className='text-1xl font-bold text-red-600 md:text-2xl lg:text-2xl text-center'>
          ¡Que nuestro amor siga creciendo cada día!
        </p>
        <p className='text-1xl font-bold text-red-600 md:text-2xl lg:text-2xl text-center'>
           Otro año juntos, ¡y los que nos quedan!
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Page
