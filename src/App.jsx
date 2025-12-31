import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router'
import RotatingText from './components/common/RotatingText'
import Separator from './components/common/Separator'
import SlidingText from './components/common/SlideUpText'
import SlideUpText from './components/common/SlideUpText'
import FloatText from './components/common/FloatText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1512px] mx-auto'>
      {/* Nav */}
      <nav className='flex justify-between items-center px-[60px] py-[32px] h-[100px] '>
        <div>
          <img src={"/assets/images/logo.png"} className='h-[40px] w-[50px]' alt='Vite logo' />
        </div>

        <div className='flex items-center gap-[32px]'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>Home</NavLink>
          <NavLink to='/safeguards' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>Safeguards</NavLink>
          <NavLink to='/journey' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>Journey</NavLink>
          <NavLink to='/how-it-works' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>How it Works</NavLink>
        </div>
      </nav>
      <Separator />
      <div>
        {/* Home */}
        <div className='flex items-center px-[100px]'>
          <div className='flex-1'>
            <div className="flex-1">
              {/* <RotatingText
                words={[
                  
                ]}
                interval={100}
                containerHeight="72px"
                className="text-[44px] leading-[72px] font-light"
              /> */}

              <SlideUpText
                items={[
                  "Glucose spike between MD visits?",
                  "Regaining weight after a brief loss?",
                  "Not meeting your metabolic goals?",
                  "Wish you had a doctor always on?",
                ]}
                interval={2500}
                className='text-[32px]'
              />
            </div>
          </div>
          <div className='flex-1'>
            <div className='relative dr-img-container max-w-[594px]'>
              <img src="/assets/images/dr-sara-mohan.png" alt="" className='w-full h-full object-cover' />
              <div className='absolute top-[50%] -translate-y-[200%] right-0'>
                <div>
                  <FloatText amplitude={6} duration={2} className="text-[22px] font-medium text-white leading-[21px]">
                    Dr. Sara Mohan <br/>
                    <span className='text-[16px] font-light'>Your AI Doctor</span>
                  </FloatText>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className='flex justify-center'>
          <div className='text-center p-[32px] font-medium text-[34px] leading-[40px] max-w-[1012px]'>
            Now you can have your own AI Doctor that is always on, always yours, and outcome focused
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
