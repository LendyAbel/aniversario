import { useState } from 'react'
import HeartComp from './components/HeartComp'
import Page from './components/Page'
import ParticlesBackground from './components/ParticleBackground'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='relative h-screen w-screen overflow-hidden'>
        {/* Particles background layer */}
        <div className='absolute inset-0 z-0 h-screen '>
          <ParticlesBackground />
        </div>
        <div className='z-10 h-screen relative flex flex-col items-center justify-center p-4'>
          <HeartComp isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <Page />}
        </div>
      </div>
    </>
  )
}

export default App
