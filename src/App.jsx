import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router'
import RotatingText from './components/common/RotatingText'
import Separator from './components/common/Separator'
import SlidingText from './components/common/SlideUpText'
import SlideUpText from './components/common/SlideUpText'
import FloatText from './components/common/FloatText'
import { useLenis } from 'lenis/react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeInText from './components/common/FadeInText'

gsap.registerPlugin(useGSAP)

function App() {
  useLenis();

  const container = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        markers: true,
      }
    })
    t1.add("firstAnim")


    t1.to(".home-section", {
      height: 0,
      autoAlpha: 0,
      paddingTop: 0,
      paddingBottom: 0,
    }, "firstAnim")

    t1.to(".second-section hero-img", {
      scale: 1,
    }, "firstAnim")

    t1.fromTo(".second-section-content", {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      delay: 0.25,
    }, "firstAnim")


    t1.add("secondAnim")

    t1.to(".second-section", {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
    }, "secondAnim")

    t1.to(".hero-img", {
      autoAlpha: 0,
      height: 0,
    }, "secondAnim")

    t1.to(".second-section", {
      autoAlpha: 0,
    }, "secondAnim")


    t1.to("third-section", {

    })

  }, { scope: container });

  return (

    <div className='max-w-[1512px] mx-auto' ref={container}>
      {/* Nav */}
      <header className='fixed top-0 z-50 left-0 right-0 '>
        <div className='flex justify-between items-center px-[24px] py-[20px] lg:px-[60px] lg:py-[32px] h-[100px] '>
          <div>
            <img src={"/assets/images/logo.png"} className='w-[30px] h-[24px] lg:h-[40px] lg:w-[50px]' alt='Vite logo' />
          </div>

          <div className='hidden lg:flex items-center gap-[32px]'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>Home</NavLink>
            <NavLink to='/safeguards' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>Safeguards</NavLink>
            <NavLink to='/journey' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>Journey</NavLink>
            <NavLink to='/how-it-works' className={({ isActive }) => isActive ? 'relative active-link font-bold' : ''}>How it Works</NavLink>
          </div>

          <div className='lg:hidden'>
            <img src="/assets/images/svg/hamburger.svg" alt="menu" className='w-[24px] h-[24px]' />
          </div>
        </div>
        {/* <Separator /> */}
      </header>
      <Home />
      <Second />
      {/* new section which will wrap above the home */}
      <Third />



    </div>
  )
}

const Home = () => {
  return <div className='home-section h-screen py-[68px] px-[42px] flex flex-col justify-center'  >
    {/* Home */}
    <div className='home flex flex-col lg:flex-row items-center lg:px-[40px] gap-[100px] lg:gap-[0px]'>
      <div className='flex-1'>
        <div className="flex-1">
          <SlideUpText
            items={[
              "Glucose spike between MD visits?",
              "Regaining weight after a brief loss?",
              "Not meeting your metabolic goals?",
              "Wish you had a doctor always on?",
            ]}
            interval={3000}
            className='text-[22px] lg:text-[32px] text-center lg:text-left'
          />
        </div>
      </div>
      <div className='flex-1'>
        <div className='relative dr-img-container max-w-[304px] lg:max-w-[100%]'>
          <img src="/assets/images/dr-sara-mohan.png" alt="" className='w-full h-full object-cover' />
          <div className='absolute top-[50%] -translate-y-[200%] lg:right-0 -right-[24px]'>
            <div>
              <FadeInText>
                <FloatText amplitude={6} duration={2} className="text-[14px] lg:text-[22px] font-medium text-white leading-[16px] lg:leading-[21px]">
                  Dr. Sara Mohan <br />
                  <span className='text-[11px] lg:text-[16px] font-light'>Your AI Doctor</span>
                </FloatText>
              </FadeInText>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Separator />
    <div className='flex justify-center'>
      <div className='text-center py-[32px] font-medium text-[20px] lg:text-[34px] leading-[40px] max-w-[1012px]'>
        Now you can have your own AI Doctor that is always on, always yours, and outcome focused
      </div>
    </div>
  </div>
}

const Second = () => {
  return <div className='second-section relative h-screen'>
    <div className='flex flex-col justify-end '>
      <img src="/assets/images/doctors-desktop-bg.png" alt="" className='hidden lg:block hero-img w-full h-full object-cover' />
      <img src="/assets/images/doctors-mobile-bg.png" alt="" className='block lg:hidden hero-img w-full h-full object-cover' />

      <div className='relative z-1 second-section-content text-center py-[28px] px-[42px] lg:px-[100px]'>
        <h2 className='text-[24px] lg:text-[36px] font-extrabold mb-[24px]'>
          Your care with human MD and AI Doctor
        </h2>
        <p className='text-[16px] lg:text-[20px] max-w-[800px] lg:max-w-[1360px] mx-auto'>
          If you are living with diabetes, hypertension, or weight struggles, you know how unpredictable the numbers can feel — progress one week, setbacks the next, and no clear sense of what actually helps. ChronicGPT changes that. Your human doctor sets your goals, and your personal AI Doctor learns your body in real time — watching your sleep, meals, glucose, activity, and medications to guide you with simple, clinical-grade decisions every day. It turns confusion into clarity, patterns into progress, and setbacks into signals you can finally understand.
        </p>
      </div>
    </div>
  </div>
}

const Third = () => {
  return <div className='h-screen third-section rounded-[54px] p-[60px] mx-[10px] text-black bg-[#FFF5E5]'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis expedita dolorem tenetur assumenda minus autem saepe sapiente exercitationem temporibus officiis, beatae eaque tempore? Magnam laudantium sint corporis ad autem?
    Sint magnam alias voluptatum quaerat doloremque, dolore sunt ea corporis consequuntur delectus libero reprehenderit quasi. Sit temporibus optio est at voluptatibus blanditiis, accusamus illo et laudantium dolorum expedita nihil corporis.
    Ipsam rerum tempore doloremque amet molestiae accusamus reprehenderit temporibus, neque consequatur quaerat ad mollitia, harum, magnam itaque praesentium eveniet veritatis unde quidem quos ea aut illo eum accusantium cupiditate? Inventore.
    Nemo, consequatur ut eaque dolorem quidem eius tempora accusamus totam ea temporibus laboriosam sequi hic soluta labore rem quibusdam sed cupiditate magni laborum necessitatibus et excepturi adipisci? Hic, aspernatur placeat.
    Nostrum repellat porro possimus minima quisquam modi accusamus repudiandae dicta quia exercitationem velit, cupiditate at? Asperiores aspernatur dignissimos nihil, libero earum labore ipsam accusantium vel aliquid consectetur dolores nostrum ex?
    Iure, sit veniam. Nemo, laudantium facere illo nostrum sit nihil aliquid ullam dolorem vero neque delectus molestias voluptate eveniet voluptatum. Aspernatur saepe officia enim sed, mollitia ipsa quia doloremque veniam.
    Nobis qui commodi excepturi soluta quibusdam aliquam sequi deserunt, alias laborum tenetur, quo doloremque quos non! Molestias quibusdam laboriosam, at iste, quis voluptate eligendi qui in illum, culpa voluptatibus dolores!
    Dolore corrupti tenetur laudantium quis nihil molestiae aliquam odio est, perferendis id laborum obcaecati maiores, alias recusandae hic dolores itaque. Id officiis quas eos cupiditate quos voluptatum animi cum odit?
    Quod magnam dolore, asperiores odio est rerum nemo, soluta iure aut aliquid delectus, totam perspiciatis mollitia beatae adipisci laborum repudiandae neque. Porro quibusdam ratione enim eos qui ipsum, molestiae quos!
    Optio eius perferendis et, facilis, accusantium hic eveniet, architecto sit nihil enim placeat. In hic quas repellendus iusto totam debitis. Suscipit reprehenderit sint magni voluptas odio eveniet molestias at? Molestiae.
  </div>
}

export default App
