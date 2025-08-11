import Image from 'next/image'
import { useRef, useState } from 'react'

const photoPaths = [
  '/images/foto1.png',
  '/images/foto2.png',
  '/images/foto3.png',
  '/images/foto4.png',
  '/images/foto5.png',
]

const Page = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const carouselRef = useRef < HTMLDivElement > null

  const numPhotos = photoPaths.length
  const anglePerPhoto = 360 / numPhotos

  const photoWidth = 300
  const radius = Math.round(photoWidth / 2 / Math.tan(Math.PI / numPhotos))

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % numPhotos)
    }, 1000)
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
    <div className='flex flex-col items-center space-y-8 w-full max-w-4xl'>
      <h1 className='text-4xl font-bold text-red-600 md:text-5xl lg:text-6xl text-center'>
        Happy Anniversary, My Love!
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
                className='w-[300px] h-64 object-cover rounded-lg shadow-lg'
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Page
