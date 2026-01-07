import React, { useRef } from 'react'
import Header from '../common/Header/header';
import Footer from '../common/Footer/footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import JoinCohort from '../common/JoinCohort/JoinCohort';
import ResponsiveSection from '../common/ResponsiveSection';

gsap.registerPlugin(useGSAP)

function Safeguards() {
  const container = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=230%",
        pinSpacing:false,
        pin: true,
        scrub: true,
      }

    })

    const cards = gsap.utils.toArray(".card");
    // const STACK_OFFSET = 25;

    // cards.forEach((card, index) => {
    //   gsap.set(card, {
    //     y: index * STACK_OFFSET, // stack DOWN
    //     scale: 1 - index * 0.04,
    //     zIndex: cards.length - index,
    //   });
    // });

    // cards.slice(1).forEach((card, index) => {

    //   t1
    //     // bring NEXT card into active slot
    //     .to(card, {
    //       y: 0,
    //       scale: 1,
    //       zIndex: cards.length + index,  // always top
    //       ease: "none",
    //       boxShadow: "0px -5px 40px rgba(0,0,0,0.2)",
    //       duration: 0.25,
    //     })

    //     // push all previous cards DOWN
    //     .to(
    //       cards.slice(0, index + 1),
    //       {
    //         y: (i) => (i + 1) * STACK_OFFSET,
    //         scale: (i) => 0.95 - i * 0.05,
    //         ease: "none",
    //         zIndex: (i) => {
    //           const newZ = cards.length - (i + 1)
    //           console.log("index", index, "card", card, "new z", newZ,)
    //           return newZ
    //         }, // 🔑 reset stacking
    //         duration: 0.25
    //       },
    //       "<"
    //     );
    // });

    // // Initial states
    // cards.forEach((card, i) => {
    //   gsap.set(card, {
    //     yPercent: i === 0 ? 0 : 30,
    //     scale: i === 0 ? 1 : 0.92,
    //     autoAlpha: i === 0 ? 1 : 0,
    //     zIndex: cards.length - i,
    //   });
    // });

    // // Scroll takeover animation
    // cards.slice(1).forEach((card, i) => {
    //   const prev = cards[i];

    //   t1
    //     // Incoming card
    //     .to(card, {
    //       yPercent: 0,
    //       scale: 1,
    //       autoAlpha: 1,
    //       duration: 1,
    //       ease: "none",
    //     })

    //     // Previous card fades back
    //     .to(
    //       prev,
    //       {
    //         scale: 0.92,
    //         autoAlpha: 0,
    //         duration: 1,
    //         ease: "none",
    //       },
    //       "<"
    //     );
    // });

    const MARGIN_TOP = 0;
    const BASE_SCALES = []
    const AUTO_ALPHAE = []

    cards.forEach((card, i) => {
      const scale = 0.85 + (i / 8)
      const autoAlpha = 1 - (i / 4)
      BASE_SCALES[i] = scale
      AUTO_ALPHAE[i] = autoAlpha
      gsap.set(card, {
        scale: scale,
        autoAlpha: autoAlpha,
        marginTop: (i + 1) * MARGIN_TOP
      });
    });


    t1.addLabel("cardsAnimation")

    cards.slice(1).forEach((card, i) => {

      const labelName = `card-anim-${i}`
      t1.addLabel(labelName)

      if (i === 0) {
        t1.to(".safeguards-header", {
          height: 0,
          autoAlpha: 0,
          duration: 0.1,
        }, labelName)
      }


      t1.to(
        cards,
        {
          yPercent: -100 * (i + 1),
          y: -(MARGIN_TOP) * (i + 1),
          ease: "none",
          scale: (index, div) => {
            if (index <= i) return 0.85
            return BASE_SCALES[index - (i + 1)]
          },
          autoAlpha: 1

        }, labelName)

    });



    t1.addLabel("secondAnim", ">+=0.25")

    t1.to(".second-inner-content", {
      height: 0,
      autoAlpha: 0,
      // padding: 0
    }, "secondAnim")

    t1.to(".section-two", {
      height: "20dvh",
    }, "secondAnim")


    t1.addLabel("thirdAnim", ">+=0.25")

    t1.to(".section-two", {
      height: 0,
      autoAlpha: 0,
    }, "thirdAnim").to(".build-for-trust", {
      height: "100dvh",
      // autoAlpha: 0,
    }, "thirdAnim")

    t1.to(".build-for-trust", {
      height: 0,
      autoAlpha: 0
    },)

    t1.addLabel("fifthAnim", ">+=0.25")

    t1.to(".join-cohort", {
      height: 0,
      autoAlpha: 0,
      ease: "none"
    }, "fifthAnim")




  }, { scope: container.current })

  return (
    <div className='max-w-[1512px] mx-auto' ref={container}>
      <Header />
      <HeaderBackground>
        <Third />
      </HeaderBackground>
      <BuildForTrust />
      <JoinCohort />
      <Footer />
    </div>
  )
}

export const HeaderBackground = ({ children }) => {
  return <div className='z-[2] section-two relative h-dvh overflow-hidden flex flex-col'>
    <div className="hero-img shrink-0 absolute h-[26dvh] w-full overflow-hidden">
      <img
        src="/assets/images/sub-banner.png"
        alt=""
        className="w-full h-full object-cover object-[0%_35%]"
      />
      {/* <div
        className="absolute inset-0 [background:linear-gradient(357.51deg,#121212_0.18%,rgba(18,18,18,0)_47.86%)]"
      /> */}
      <div
        className="
          absolute inset-0
          [background:radial-gradient(circle,rgba(18,18,18,0)_30%,#121212_190%)]
        "
      />
      <div
        className="
        pointer-events-none
        absolute inset-0
        bg-[linear-gradient(to_bottom,_transparent_30%,_#121212_100%)]
        translate-y-[10%]
        
      "
      />

    </div>
    <div className='second-inner-content mt-[20dvh] flex flex-col flex-1 p-[10px] pt-[0px]'>
      {children}
    </div>
  </div>
}

const Third = () => {
  return <ResponsiveSection className='bg-[#F1F1F1] z-[1] flex-1 relative third-section rounded-[54px] text-[#121212] overflow-hidden' >

    <div className='flex flex-col gap-[20px] 3xl:gap-[40px]'>
      <div className='safeguards-header flex-1 flex flex-col gap-[20px]'>
        <div className='flex flex-row gap-2'>
          <div className='flex-1 text-[40px] font-semibold '>
            Safeguards you deserve
          </div>
          <div className='flex-1 font-medium'>
            Your AI Doctor is designed with multiple layers of protection to ensure your safety, privacy, and the highest standard of care.
          </div>
        </div>
      </div>
      <div className='relative z-[1] flex flex-col'>
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
  </ResponsiveSection >
}

const Card = ({ title, logo, img, children }) => (
  <div className='card bg-white shadow-[0px_10px_20px_0px_#0000000A] rounded-[40px] p-[24px] border border-[1px] border-[#B0B0B0] flex gap-[60px]'>
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
      <div className='lg:h-[300px] xl:h-[320px] rounded-[24px] overflow-hidden'>
        <img src={img} className='w-full h-full object-cover rounded-[24px]' />
      </div>
    </div>
  </div>
)

const BuildForTrust = () => (
  <div className='build-for-trust bg-transparent rounded-[52px] overflow-hidden flex flex-col border border-[5px] border-white'>
    <div className="relative h-[420px] rounded-[52px] overflow-hidden">
      <img
        src="/assets/images/safeguards/safeguards-bg-v2.png"
        alt=""
        className="w-full h-full object-cover object-center rounded-[52px]"
      />
    </div>
    <div className='flex-1 flex flex-col justify-center gap-[24px] text-center p-[24px] pb-[32px]'>
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