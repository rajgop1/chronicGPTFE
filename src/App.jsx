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
import Footer from './components/common/Footer/footer'
import { cn } from './helpers/utils'

gsap.registerPlugin(useGSAP)

function App() {
  useLenis();

  const container = useRef();
  const carouselContainerRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: true,
        // markers: true,
      }
    })


    t1.add("firstAnim")


    t1.to(".home-section", {
      height: 0,
      autoAlpha: 0,
      paddingTop: 0,
      paddingBottom: 0,
      ease: "none"
    }, "firstAnim")

    t1.fromTo(".second-section .hero-img", {
      autoAlpha: 0.85,
      ease: "none"
    },
      {
        autoAlpha: 1,
        ease: "none"
      }, "firstAnim")

    t1.fromTo(".second-section-content", {
      autoAlpha: 0,
      ease: "none"
    }, {
      autoAlpha: 1,
      delay: 0.25,
      ease: "none"
    }, "firstAnim")

    t1.fromTo(".header", {
      background: "#12121200",
      ease: "none"
    }, {
      delay: 0.25,
      background: "transparent",
      ease: "none"
    }, "firstAnim")


    t1.add("secondAnim")

    t1.to(".second-section", {
      height: 200,
      paddingTop: 0,
      paddingBottom: 0,
      ease: "none"
    }, "secondAnim")

    t1.to(".hero-img", {
      autoAlpha: 0.75,
      height: 200,
      ease: "none"
    }, "secondAnim")

    t1.to(".second-section", {
      autoAlpha: 0.5,
      ease: "none"
    }, "secondAnim")

    t1.to(".second-section-content", {
      autoAlpha: 0,
    }, "secondAnim")

    t1.to(".second-card", { y: "-95%", ease: "none", boxShadow: "0px -5px 40px rgba(0,0,0,0.2)" }, "cardsAnim1")
    t1.to(".third-card", { y: "-95%", ease: "none", boxShadow: "0px -5px 40px rgba(0,0,0,0.2)" }, "cardsAnim1")
    t1.add("cardsAnim2")
    t1.to(".third-card", { y: "-=100%", ease: "none", boxShadow: "0px -5px 40px rgba(0,0,0,0.2)" }, "cardsAnim2")
    t1.to("third-card", { y: "-=80", ease: "none", boxShadow: "0px -5px 40px rgba(0,0,0,0.2)" })
    // const cards = ".card"




    // t1.add("cardsAnim1")

    // t1.to(cards, {
    //   y: "-=100%",
    //   ease: "none"
    // })

    // t1.to(cards, {
    //   y: "-=100%",
    //   ease: "none"
    // })

    // t1.add("thirdAnim")


    t1.to(".third-section", {
      autoAlpha: 0.8,
      delay: 0.25
    }, "thirdAnim")


    t1.to(
      ".section-four",
      {
        y: "-99%",
        boxShadow: "0px -20px 40px rgba(0,0,0,0.3)", // final shadow
        ease: "none"
      },
      "thirdAnim"
    )


    const wrapper = ".hr-card"
    const steps = 6

    for (let i = 0; i < steps - 1; i++) {
      t1.to(wrapper, {
        x: "-=100%",
        ease: "none"
      })
    }


    t1.add("fourthAnim")

    t1.to(
      ".section-four",
      {
        y: "0%",
        boxShadow: "none"
      },
      "fourthAnim"
    )


    t1.to(".third-section", {
      height: 0,
      autoAlpha: 0,
      padding: 0,
      ease: "none",
    }, "fourthAnim")



    t1.to(".section-four", {
      height: 0,
      padding: 0,
      delay: 0.5,
      autoAlpha: 0,
      ease: "none"
    }, "fourthAnim")

    t1.to(".second-section", {
      height: 0,
      autoAlpha: 0,
      ease: "none",
      delay: -0.25
    }, "fourthAnim")

    t1.to(".second-section-content", {
      height: 0,
      autoAlpha: 0,
      padding: 0,
      ease: "none",
      delay: -0.25
    }, "fourthAnim")

    t1.to(".hero-img", {
      height: 0,
      autoAlpha: 0,
      delay: -0.25,
      ease: "none"
    }, "fourthAnim")

    t1.fromTo(".header", {
      background: "transparent",
      ease: "none"
    }, {
      delay: -0.25,
      background: "#121212ef",
      ease: "none"
    }, "fourthAnim")

    // t1.to(".header", {
    //   background: "transparent",
    //   ease: "none",
    // },"fourthAnim")

    // t1.to(".footer", {
    //   height: 0,
    //   y: "-=100%",
    //   autoAlpha: 0,
    //   ease: "none"
    // }, "fifthAnim")

    // come back to 0 (second half of fourthAnim)
    // t1.to(
    //   ".section-five",
    //   { y: "0%", ease: "none" },
    //   // "fourthAnim"
    // )


    t1.add("fifthAnim")



    t1.to(".section-five", {
      height: 0,
      autoAlpha: 0,
      ease: "none"
    }, "fifthAnim")



  }, { scope: container });

  return (

    <div className='max-w-[1512px] mx-auto' ref={container}>
      {/* Nav */}
      <header className='header fixed top-0 z-50 left-0 right-0 '>
        <div className='flex justify-between items-center px-[24px] py-[20px] lg:px-[60px] lg:py-[32px] h-[100px] '>
          <div>
            <img src={"/assets/images/logo.png"} className='w-[30px] h-[24px] lg:h-[40px] lg:w-[50px]' alt='Vite logo' />
          </div>

          <div className='hidden lg:flex items-center gap-[32px]'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'relative active-link font-bold ' : ''}>Home</NavLink>
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
      <Fourth />

      <SectionFive />

      <div className='footer'>

        <Footer />
      </div>

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
    <FadeInText className='flex justify-center'>
      <div className='text-center py-[32px] font-medium text-[20px] lg:text-[34px] leading-[40px] max-w-[1012px]'>
        Now you can have your own AI Doctor that is always on, always yours, and outcome focused
      </div>
    </FadeInText>
  </div>
}

const Second = () => {
  return <div className='z-[2] second-section relative h-screen'>
    <div className='flex flex-col justify-end '>
      <div className='w-full flex-1 hero-img'>
        <img src="/assets/images/doctors-desktop-bg.png" alt="" className='w-full h-full object-cover' />
      </div>
      {/* <img src="/assets/images/doctors-mobile-bg.png" alt="" className='block lg:hidden hero-img w-full h-full object-cover' /> */}

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

const Third = ({ carouselContainerRef }) => {
  return <div className='z-[3] relative h-screen third-section rounded-[54px] p-[60px] mx-[10px] text-black bg-[#FFF] overflow-hidden'>
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-2'>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='text-[40px] font-semibold '>
          How it works
        </div>
        <div className='font-semibold'>
          Your AI Doctor combines three layers of intelligence  <br /> to give you continuous, clinician-guided care.
        </div>
      </div>
      <div ref={carouselContainerRef} className='flex-1 cards-carousel-container flex flex-col gap-[32px]'>
        <div className='card bg-[#F1F1F1] first-card card-carousel rounded-[50px] p-[40px] flex flex-col gap-[32px]'>
          <div className='img-container rounded-[20px] h-[212px] overflow-hidden'>
            <img src="/assets/images/card-1.jpg" alt="" className=' w-full h-full object-cover' />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div className='font-light text-[32px] text-[#121212]'>01</div>

            <div className='flex flex-col'>
              <div className='font-bold text-[20px]'>
                Your AI Doctor studies the way your body behaves
              </div>
              <div className='text-[16px]'>It watches your sleep quality, meals, glucose swings, hydration, medication timing, activity, and stress patterns. Over time, it builds a living model of your physiology, spotting subtle patterns that even good doctors can’t see between visits. This is how it understands why your numbers move the way they do, and what will help you stabilize them.</div>

            </div>

          </div>

        </div>
        <div className='card bg-[#F1F1F1] second-card card-carousel rounded-[50px] p-[40px] flex flex-col gap-[32px]'>
          <div className='img-container rounded-[20px] h-[212px] overflow-hidden'>
            <img src="/assets/images/card-2.png" alt="" className=' w-full h-full object-cover' />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div className='font-light text-[32px] text-[#121212]'>02</div>

            <div className='flex flex-col'>
              <div className='font-bold text-[20px]'>
                Behind every insight is real clinical reasoning.
              </div>
              <div className='text-[16px]'>Your AI Doctor evaluates risk the way a careful physician would: rising morning glucose, changing blood pressure trends, sleep debt, medication conflicts, missed doses, unusual heart-rate shifts, and more. When something looks concerning, it flags it early — and your human doctor reviews your clinical trace to confirm the right next step. You get the vigilance of a medical team that never goes off duty.</div>

            </div>

          </div>

        </div>
        <div className='card bg-[#F1F1F1] third-card card-carousel rounded-[50px] p-[40px] flex flex-col gap-[32px]'>
          <div className='img-container rounded-[20px] h-[212px] overflow-hidden'>
            <img src="/assets/images/card-3.png" alt="" className=' w-full h-full object-cover' />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div className='font-light text-[32px] text-[#121212]'>03</div>

            <div className='flex flex-col'>
              <div className='font-bold text-[20px]'>
                Clear explanations. Simple actions. No jargon.              </div>
              <div className='text-[16px]'>Your AI Doctor turns complex data into practical daily guidance:
                “Your numbers look stable — keep the same routine today.”
                “Take a lighter dinner tonight; your glucose stayed elevated longer than usual.”
                “Focus on hydration for the next 24 hours — it will help bring your pressure down.”
                Every message is personalized, medically grounded, and aimed at keeping you steady, confident, and in control.</div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
}

const Fourth = () => {
  return <div className='h-screen relative z-[4] text-[#121212] bg-[#F1F1F1] section-four flex flex-col gap-[60px] bg-[#F1F1F1] p-[60px] mx-[10px] rounded-[60px] overflow-hidden'>
    <div className='flex gap-2'>
      <h2 className='flex-1 text-[40px] leading-[52px] font-semibold'>
        Real clinical outcomes, <br /> felt in your everyday life
      </h2>
      <p className='flex-1 text-[16px] leading-[24px] font-medium'>
        You choose one or more improvement programs. Your AI Doctor works in the background every day — helping you feel the changes in ways that matter: steadier energy, calmer mornings, smoother rhythms, and more restorative nights.
      </p>
    </div>
    <div className='flex gap-[24px]'>
      <HorizontalCard
        title="Mornings stop feeling unpredictable"
        img={"/assets/images/hr-card-1.jpg"}
        className="hr-card-1"
      >
        Instead of waking up already behind, you start the day more steady — clear-headed, less groggy, and without the crashes that used to set the tone.
      </HorizontalCard>
      <HorizontalCard
        title="Sleep becomes restorative"
        img={"/assets/images/hr-card-2.jpg"}
        className="hr-card-2"
      >
        Your AI Doctor helps you adjust your evenings, nutrition, timing, and recovery.
        You fall asleep easier, wake up less, and start feeling rested in a way you haven’t in years.
      </HorizontalCard>
      <HorizontalCard
        title="Meals stop derailing your day"
        img={"/assets/images/hr-card-3.jpg"}
        className="hr-card-3"
      >
        You quickly learn which foods and timings work for your physiology.
        Post-meal crashes shrink, late-evening glucose stays quieter, and eating stops feeling like guesswork.
      </HorizontalCard>
      <HorizontalCard
        title="Energy feels smoother, not spiky"
        img={"/assets/images/hr-card-4.jpg"}
        className="hr-card-4"
      >
        Instead of sharp highs and lows, your days develop a smoother rhythm.
        Lifting groceries, climbing stairs, focusing at work — everything feels more doable.
      </HorizontalCard>
      <HorizontalCard
        title="Mornings stop feeling unpredictable"
        img={"/assets/images/hr-card-1.jpg"}
        className="hr-card-5"
      >
        Instead of waking up already behind, you start the day more steady — clear-headed, less groggy, and without the crashes that used to set the tone.
      </HorizontalCard>
      <HorizontalCard
        title="Sleep becomes restorative"
        img={"/assets/images/hr-card-2.jpg"}
        className="hr-card-6"
      >
        Your AI Doctor helps you adjust your evenings, nutrition, timing, and recovery.
        You fall asleep easier, wake up less, and start feeling rested in a way you haven’t in years.
      </HorizontalCard>
      <HorizontalCard
        title="Meals stop derailing your day"
        img={"/assets/images/hr-card-3.jpg"}
        className="hr-card-7"
      >
        You quickly learn which foods and timings work for your physiology.
        Post-meal crashes shrink, late-evening glucose stays quieter, and eating stops feeling like guesswork.
      </HorizontalCard>
      <HorizontalCard
        title="Energy feels smoother, not spiky"
        img={"/assets/images/hr-card-4.jpg"}
        className="hr-card-8"
      >
        Instead of sharp highs and lows, your days develop a smoother rhythm.
        Lifting groceries, climbing stairs, focusing at work — everything feels more doable.
      </HorizontalCard>
    </div>
  </div>
}

const HorizontalCard = ({ img, title, className, children }) => (
  <div className={cn('hr-card min-w-[320px] max-w-[320px] bg-white flex flex-col gap-[20px] p-[20px] pb-[77px] rounded-[40px]', className)}>
    <div className='img-container w-[280px] h-[152px] rounded-[20px] overflow-hidden'>
      <img src={img} alt="" className='w-full h-full object-cover' />
    </div>
    <div className='flex flex-col gap-[4px]'>
      <h3 className='font-bold text-[20px]'>
        {title}
      </h3>
      <p className='text-[16px]'>
        {children}
      </p>
    </div>
  </div>
)

const SectionFive = () => {
  return <div className='bg-[#121212] w-full h-full rounded-t-[54px] overflow-hidden relative z-[5] section-five h-screen'>
    <img src="/assets/images/section-five.png" className=' w-full h-full object-contain' />
  </div>
}



export default App
