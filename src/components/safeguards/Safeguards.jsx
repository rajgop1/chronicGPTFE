import React, { useRef } from 'react'
import Header from '../common/Header/header';
import Footer from '../common/Footer/footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import JoinCohort from '../common/JoinCohort/JoinCohort';

gsap.registerPlugin(useGSAP)

function Safeguards() {
  const container = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: () => "+=400%",
        pin: true,
        scrub: true,
      }

    })

    const cards = gsap.utils.toArray(".card");


    cards.slice(1).forEach((card, index) => {
      t1.to(card, {
        yPercent: -(index + 1) * 100,
        scale: 1 - (index + 1) * 0.04,
        ease: "none",
        boxShadow: "0px -5px 40px rgba(0,0,0,0.2)"
      });
    });

    t1.to(".section-two", {
      height: 0,
      autoAlpha: 0
    })

    
    t1.add("fourthAnim")
    
    t1.to(".build-for-trust", {
      height: 0,
      autoAlpha: 0
    }, "fourthAnim")
    

    t1.add("fifthAnim")

    t1.to(".section-five", {
      height: 0,
      autoAlpha: 0,
      ease: "none"
    }, "fifthAnim")




  }, { scope: container.current })

  return (
    <div className='max-w-[1512px] mx-auto' ref={container}>
      <Header />
      <Second />
      <BuildForTrust />
      <JoinCohort />
      <Footer />
    </div>
  )
}

const Second = () => {
  return <div className='z-[2] section-two relative h-screen overflow-hidden'>
    <div className='flex flex-col justify-end '>
      <div className="relative h-[240px] overflow-hidden">
        <img
          src="/assets/images/safeguards/safeguard-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div>
        <Third />
      </div>
    </div>
  </div>
}

const Third = () => {
  return <div className='bg-[#F1F1F1] z-[1] relative h-screen third-section rounded-[54px] p-[60px] mx-[10px] text-black bg-[#FFF] overflow-hidden'>
    <div className='flex flex-col gap-[40px]'>
      <div className='flex-1 flex flex-col gap-[20px]'>
        <div className='flex flex-row gap-2'>
          <div className='flex-1 text-[40px] font-semibold '>
            Safeguards you deserve
          </div>
          <div className='flex-1 font-medium'>
            Your AI Doctor is designed with multiple layers of protection to ensure your safety, privacy, and the highest standard of care.
          </div>
        </div>
      </div>
      <div className='relative z-[1] flex flex-col gap-[24px]'>
        <Card title="Your data stays yours" logo="/assets/images/safeguards/card-1-icon.png" img="/assets/images/safeguards/card-1.jpg">
          Your health data is encrypted, never sold, and never shared without your permission. You decide what ChronicGPT Inc. can access and what it cannot.
        </Card>
        <Card title="Built for safety first" logo="/assets/images/safeguards/card-2-icon.png" img="/assets/images/safeguards/card-2.jpg">
          AI Doctor is designed to avoid harmful or risky recommendations. Anything uncertain, unusual, or outside its scope immediately triggers clinician review.
        </Card>
        <Card title="Transparent and in your control" logo="/assets/images/safeguards/card-3-icon.png" img="/assets/images/safeguards/card-3.jpg">
          You can see what the AI Doctor sees, why it makes a recommendation, and who else can access your data. No black boxes, no hidden decisions.
        </Card>
        <Card title="AI Doctor is medically validated" logo="/assets/images/safeguards/card-4-icon.png" img="/assets/images/safeguards/card-4.jpg">
          Every AI Doctor is continuously reviewed by licensed physicians. It follows clinical guidelines, double-checks itself, and escalates to a human doctor whenever needed.
        </Card>
        <Card title="Fully compliant with US healthcare laws" logo="/assets/images/safeguards/card-5-icon.png" img="/assets/images/safeguards/card-5.png">
          ChronicGPT Inc complies with HIPAA, tele-health regulations, and all relevant AI-in-health safeguards. You are using a medically governed product, not a hobby experiment.
        </Card>
        <Card title="Human doctors stand behind every action" logo="/assets/images/safeguards/card-6-icon.png" img="/assets/images/safeguards/card-6.jpg">
          AI Doctor is never alone. It works alongside real physicians who monitor safety, review complex situations, and support your care whenever needed.
        </Card>
      </div>
    </div>
  </div>
}

const Card = ({ title, logo, img, children }) => (
  <div className='card bg-white shadow-[0px_10px_20px_0px_#0000000A] rounded-[40px] p-[32px] border border-[1px] border-[#B0B0B0] flex gap-[60px]'>
    <div className='flex-1 flex flex-col justify-between'>
      <div className='flex items-center gap-[20px]'>
        <img src={logo} alt="" className='w-[80px] h-[80px]' />
        <div className='text-[28px] font-medium'>
          {title}
        </div>
      </div>
      <div className='text-[20px]'>
        {children}
      </div>
    </div>
    <div className='flex-1'>
      <div className='lg:h-[300px] xl:h-[372px] rounded-[24px] overflow-hidden'>
        <img src={img} className='w-full h-full object-cover rounded-[24px]' />
      </div>
    </div>
  </div>
)

const BuildForTrust = () => (
  <div className='build-for-trust rounded-[52px] overflow-hidden flex flex-col gap-[32px] border border-[5px] border-white'>
    <div className="relative h-[456px] rounded-[52px] overflow-hidden">
      <img
        src="/assets/images/safeguards/safeguard-bg.jpg"
        alt=""
        className="w-full h-full object-cover object-center rounded-[52px]"
      />
    </div>
    <div className='flex flex-col gap-[24px] text-center p-[24px]'>
      <div className='text-[36px] font-semibold'>Built for Trust</div>
      <div className='text-[16px] flex flex-col gap-[8px]'>
        <div className='font-medium'>
          We know you can only trust a system that is medically sound, transparent, and accountable. ChronicGPT is built so that your AI Doctor never acts alone. Your human doctor sets your health goals, licensed physicians oversee your progress, and every recommendation your AI Doctor makes is traceable, explainable, and grounded in real clinical reasoning. You are always informed, always in control, and never navigating your health alone.
        </div>
        <div className='font-bold'>
          How we keep you safe:
        </div>
        <div className='font-medium'>
          <div><span className='font-semibold'> Clinical Oversight: </span> Physicians review your clinical trace and intervene whenever needed.</div>
          <div><span className='font-semibold'> Transparent Decisions: </span> You always see why your AI Doctor recommended something — no black boxes.</div>
          <div><span className='font-semibold'> Your Data Stays Yours: </span> Fully encrypted, never sold, never shared for ads, and always under your control.</div>
        </div>
      </div>
    </div>

  </div>
)

export default Safeguards