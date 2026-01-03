import React, { useRef } from 'react'
import Header from '../common/Header/header';
import Footer from '../common/Footer/footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import JoinCohort from '../common/JoinCohort/JoinCohort';
import { HeaderBackground } from '../safeguards/Safeguards';

gsap.registerPlugin(useGSAP)

function Journey() {
  const container = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "max",
        pin: true,
        scrub: true,
      }

    })

    const cards = gsap.utils.toArray(".card");


    // cards.slice(1).forEach((card, index) => {
    //   const children = card.querySelector(".card-children");

    //   t1.set(card, {
    //     // x: -(index + 1) * 100,
    //     minWidth: "20%",
    //     ease: "none",
    //     boxShadow: "0px -5px 40px rgba(0,0,0,0.2)",
    //     borderTopLeftRadius: 0,
    //     borderBottomLeftRadius: 0,
    //     borderLeft: 0,
    //   });

    //   t1.set(children, {
    //     // x: -(index + 1) * 100,
    //     visibility: "hidden"
    //   });
    // });

    const COLLAPSED = 160;
    const EXPANDED = 550;

    cards.forEach((card, i) => {
      const children = card.querySelector(".card-children");

      gsap.set(card, {
        width: i === 0 ? EXPANDED : COLLAPSED,
        height: 550,
      });

      gsap.set(children, {
        autoAlpha: i === 0 ? 1 : 0,
        height: i === 0 ? "auto" : 0,
        overflow: "hidden"
      });
    });


    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      const current = cards[i];
      const next = cards[i + 1];

      const currentChildren = current.querySelector(".card-children");
      const nextChildren = next.querySelector(".card-children");

      t1
        // shrink current
        .to(current, {
          width: COLLAPSED,
          ease: "none",
          duration: 0.2
        })

        // expand next AT THE SAME TIME
        .to(next, {
          width: EXPANDED,
          ease: "none",
          duration: 0.2
        }, "<")

        // fade children
        .to(currentChildren, {
          autoAlpha: 0,
          height: 0,
          ease: "none",
          duration: 0.2
        }, "<")

        .to(nextChildren, {
          autoAlpha: 1,
          ease: "none",
          height: "auto",
          duration: 0.2,
          delay: 0.2
        }, "<");
    });


    t1.to(".section-two", {
      height: "10vh",
      autoAlpha: 0
    })


        
    t1.addLabel("card2anim")

    const cards2 = gsap.utils.toArray(".card-2");

    cards2.forEach((card, i) => {
      t1.to(card, {
        y: `-${(i ) * 100}%`,  // each card moves more than the previous
        boxShadow: "0px -5px 80px rgba(0,0,0,0.8)",
        ease: "none",
        duration: 0.3
      });
    });

    t1.addLabel("thirdAnim");

    t1.to(".section-three-header", {
      autoAlpha: 0.75,
      duration: 0.2
    }, "thirdAnim")

    t1.to(".section-two", {
      height: "0",
      autoAlpha: 0,
      duration: 0.1
    })

    t1.add("fourthAnim")

    t1.to(".section-three", {
      height: 0,
      autoAlpha: 0,
      border: 0,
      padding: 0
    }, "fourthAnim")


    t1.add("fifthAnim")

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
      <SectionThree />
      <JoinCohort />
      <Footer />
    </div>
  )
}


const Third = () => {
  return <div className='bg-[#F1F1F1] z-[1] relative h-screen third-section rounded-[54px] p-[60px] mx-[10px] text-black bg-[#FFF] overflow-hidden'>
    <div className='flex flex-col gap-[40px]'>
      <div className='flex-1 flex flex-col gap-[20px]'>
        <div className='flex flex-row gap-2'>
          <div className='flex-1 text-[40px] font-semibold '>
            Your Journey With Qronic AI
          </div>
          <div className='flex-1 font-medium'>
            Your AI Doctor combines three essential functions to provide continuous, intelligent care.
          </div>
        </div>
      </div>
      <div className='relative z-[1] flex'>
        <Card position="01" title="Your MD sets your clinical goals." logo="/assets/images/safeguards/card-1-icon.png" img="/assets/images/safeguards/card-1.jpg">
          After sign-up, your own physician (or one you choose on the platform) reviews your labs, medications, history, and current biomarkers.
          They set measurable 3–6 month goals — for HbA1c, weight, LDL, blood pressure, sleep, and more.
          These goals become the medical blueprint for your AI Doctor.
        </Card>
        <Card position="02" title="You create your own AI Doctor." logo="/assets/images/safeguards/card-2-icon.png" img="/assets/images/safeguards/card-2.jpg">
          You choose how you want to interact: text, voice notes, or a human-like video avatar.
          Pick your language, tone, and frequency of check-ins.
          Your AI Doctor learns your communication style and is available 24/7.
        </Card>
        <Card position="03" title="Your devices connect and your data flows in automatically." logo="/assets/images/safeguards/card-3-icon.png" img="/assets/images/safeguards/card-3.jpg">
          We provide essential wearables for free (sleep/activity tracker, CGM for diabetes, BP cuff for hypertension) or integrate your existing devices.
          Your glucose, sleep, activity, heart rate, medications, and meals stream in continuously.
          Your AI Doctor now has your real-world health signals.
        </Card>
        <Card position="04" title="Your AI Doctor builds a digital model of your body." logo="/assets/images/safeguards/card-4-icon.png" img="/assets/images/safeguards/card-4.jpg">
          It studies how you respond to food, stress, sleep, activity, and medications — minute by minute.
          It translates your doctor’s goals into daily targets for sleep, nutrition, activity, and medication.
          This creates your personalized baseline and learning model.
        </Card>
        <Card position="05" title="You receive daily individualized guidance." logo="/assets/images/safeguards/card-5-icon.png" img="/assets/images/safeguards/card-5.png">
          Your AI Doctor watches your body in real time and sends timely, specific micro-interventions:
          what to adjust, when to rest, how to pace meals, when to hydrate, or when to move.
          You also have twice-weekly check-ins that replace the dashboard clutter you’re used to.
        </Card>
        <Card position="06" title="A clinician supervises everything and steps in when needed." logo="/assets/images/safeguards/card-6-icon.png" img="/assets/images/safeguards/card-6.jpg">
          Physicians review your progress, validate recommendations, adjust your plan, and handle escalations.
          If your AI Doctor detects a red flag or predicts risk, it arranges a telehealth visit or alerts your MD immediately.
          When it’s time for a routine appointment, your AI Doctor sends your progress summary to your physician.
        </Card>
      </div>
    </div>
  </div>
}

const Card = ({ title, logo, img, children, position = "01" }) => (
  <div className='flex flex-col shrink-0 card w-[550px] bg-white shadow-[0px_10px_20px_0px_#0000000A] rounded-[60px] p-[24px] border border-[1px] border-[#B0B0B0] flex gap-[20px]'>
    <div className='flex-1 flex flex-col gap-[16px]'>
      <div className='h-[204px] rounded-[40px] overflow-hidden'>
        <img src={img} className='w-full h-full object-cover rounded-[24px]' />
      </div>
      <div className='font-bold text-[20px] flex flex-col gap-[8px]'>
        <div>{title}</div>
      </div>
      <div className='card-children'>
        {children}
      </div>
    </div>
    <div className='font-roboto text-[32px]'>
      {position}
    </div>
  </div>
)

const SectionThree = () => (
  <div className='relative z-[4] section-three h-screen rounded-[52px] overflow-hidden flex flex-col gap-[32px] border border-[5px] border-white'>

    <div className='flex flex-col gap-[24px] p-[24px] pt-0'>
      <div className='relative z-[2] pt-[24px] flex items-center bg-[#121212] section-three-header'>
        <div className='flex-1 text-[36px] font-semibold'>No Surprises. No Fine Print. <br /> Just the Truth.</div>
        <div className='flex-1 font-medium'>We believe in complete transparency. Here's exactly what you get with Qronic AI, what your insurance already covers, and what's optional.</div>
      </div>
      <div className='relative z-[1] flex flex-col gap-[40px]'>
        <Card2
          title="Included with ChronicAI"
          subtitle="(Everything here is part of the subscription)"
          img="/assets/images/journey/card-1.jpg"
        >
          <div>Your own AI Doctor</div>
          <div>Daily guidance & weekly check-ins</div>
          <div>24/7 messaging & support</div>
          <div>Continuous monitoring of patterns</div>
          <div>Integration with your existing wearables</div>
          <div>Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)</div>
        </Card2>

        <Card2
          title="Covered by Your Insurance"
          subtitle="(Things your existing doctor or insurance already covers)"
          img="/assets/images/journey/card-2.jpg"
        >
          <div>Routine lab tests</div>
          <div>Imaging and results</div>
          <div>Prescription medications</div>
          <div>In-person doctor visits</div>
          <div>Many telehealth visits with clinicians</div>
        </Card2>

        <Card2
          title="User’s Choice"
          subtitle="(Completely optional add-ons; not required)"
          img="/assets/images/journey/card-3.jpg"
        >
          <div>Additional specialty sensors</div>
          <div>Non-standard lab panels</div>
          <div>Extra or premium services</div>
          <div>Any advanced devices not included in starter kit</div>
        </Card2>
      </div>
    </div>
  </div>
)

const Card2 = ({ title, subtitle, img, children }) => (
  <div className='card-2 rounded-[40px] bg-[#2A2A2A] p-[40px] flex flex-row gap-[32px]'>
    <div className='flex-1 flex flex-col gap-[24px]'>
      <div>
        <div className='font-semibold text-[24px]'>{title}</div>
        <div className=''>{subtitle}</div>
      </div>
      <div className='flex flex-col gap-[8px] px-[20px]'>
        {children}
      </div>
    </div>
    <div className="flex-1 relative h-[456px] rounded-[52px] overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover object-center rounded-[52px]"
      />
    </div>
  </div>
)
export default Journey