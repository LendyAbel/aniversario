import { useState } from 'react'
import HeartComp from './components/HeartComp'
import Page from './components/Page'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
      <div className='h-screen relative flex flex-col items-center justify-center p-4'>
        <HeartComp setIsOpen={setIsOpen} />
        {isOpen && <Page/>}
      </div>
    </>
  )
}

export default App
