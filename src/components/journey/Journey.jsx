import React, { useRef } from 'react'
import Header from '../common/Header/header';
import Footer from '../common/Footer/footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import JoinCohort from '../common/JoinCohort/JoinCohort';
import { HeaderBackground } from '../safeguards/Safeguards';
import { cn } from '../../helpers/utils';
import HoverCards from '../common/Framer/HoverCards';
import ResponsiveSection from '../common/ResponsiveSection';

gsap.registerPlugin(useGSAP)

const CARD_DATA = [
  {
    position: "01",
    title: "Your MD sets your clinical goals.",
    logo: "/assets/images/safeguards/card-1-icon.png",
    img: "/assets/images/safeguards/card-1.jpg",
    text: `After sign-up, your own physician (or one you choose on the platform) reviews your labs, medications, history, and current biomarkers.
           They set measurable 3–6 month goals — for HbA1c, weight, LDL, blood pressure, sleep, and more.
           These goals become the medical blueprint for your AI Doctor.`
  },
  {
    position: "02",
    title: "You create your own AI Doctor.",
    logo: "/assets/images/safeguards/card-2-icon.png",
    img: "/assets/images/safeguards/card-2.jpg",
    text: `You choose how you want to interact: text, voice notes, or a human-like video avatar.
           Pick your language, tone, and frequency of check-ins.
           Your AI Doctor learns your communication style and is available 24/7.`
  },
  {
    position: "03",
    title: "Your devices connect and your data flows in automatically.",
    logo: "/assets/images/safeguards/card-3-icon.png",
    img: "/assets/images/safeguards/card-3.jpg",
    text: `We provide essential wearables for free (sleep/activity tracker, CGM for diabetes, BP cuff for hypertension) or integrate your existing devices.
           Your glucose, sleep, activity, heart rate, medications, and meals stream in continuously.
           Your AI Doctor now has your real-world health signals.`
  },
  {
    position: "04",
    title: "Your AI Doctor builds a digital model of your body.",
    logo: "/assets/images/safeguards/card-4-icon.png",
    img: "/assets/images/safeguards/card-4.jpg",
    text: `It studies how you respond to food, stress, sleep, activity, and medications — minute by minute.
           It translates your doctor’s goals into daily targets for sleep, nutrition, activity, and medication.
           This creates your personalized baseline and learning model.`
  },
  {
    position: "05",
    title: "You receive daily individualized guidance.",
    logo: "/assets/images/safeguards/card-5-icon.png",
    img: "/assets/images/safeguards/card-5.png",
    text: `Your AI Doctor watches your body in real time and sends timely, specific micro-interventions:
           what to adjust, when to rest, how to pace meals, when to hydrate, or when to move.
           You also have twice-weekly check-ins that replace the dashboard clutter you’re used to.`
  },
  {
    position: "06",
    title: "A clinician supervises everything and steps in when needed.",
    logo: "/assets/images/safeguards/card-6-icon.png",
    img: "/assets/images/safeguards/card-6.jpg",
    text: `Physicians review your progress, validate recommendations, adjust your plan, and handle escalations.
           If your AI Doctor detects a red flag or predicts risk, it arranges a telehealth visit or alerts your MD immediately.
           When it’s time for a routine appointment, your AI Doctor sends your progress summary to your physician.`
  }
];


function Journey() {
  const container = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();

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

    // cards.slice(1).forEach((card)=>{
    //   gsap.set(card, {
    //     translateX:"-1px"
    //   })
    // })

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

    // cards.forEach((card, i) => {
    //   const children = card.querySelector(".card-children");

    //   gsap.set(card, {
    //     width: i === 0 ? EXPANDED : COLLAPSED,
    //     height: 550,
    //   });

    //   gsap.set(children, {
    //     autoAlpha: i === 0 ? 1 : 0,
    //     height: i === 0 ? "auto" : 0,
    //     overflow: "hidden"
    //   });
    // });


    // cards.forEach((card, i) => {
    //   if (i === cards.length - 1) return;

    //   const current = cards[i];
    //   const next = cards[i + 1];

    //   const currentChildren = current.querySelector(".card-children");
    //   const nextChildren = next.querySelector(".card-children");

    //   t1
    //     // shrink current
    //     .to(current, {
    //       width: COLLAPSED,
    //       ease: "none",
    //       duration: 0.2
    //     })

    //     // expand next AT THE SAME TIME
    //     .to(next, {
    //       width: EXPANDED,
    //       ease: "none",
    //       duration: 0.2
    //     }, "<")

    //     // fade children
    //     .to(currentChildren, {
    //       autoAlpha: 0,
    //       height: 0,
    //       ease: "none",
    //       duration: 0.2
    //     }, "<")

    //     .to(nextChildren, {
    //       autoAlpha: 1,
    //       ease: "none",
    //       height: "auto",
    //       duration: 0.2,
    //       delay: 0.2
    //     }, "<");
    // });


    t1.to(".section-two", {
      height: "10dvh",
      autoAlpha: 0
    })



    t1.addLabel("card2anim")

    const cards2 = gsap.utils.toArray(".card-2");

    /* ⏩ DESKTOP — keep your existing logic */
    mm.add("(min-width: 768px)", () => {
      cards2.forEach((card, i) => {
        t1.to(card, {
          y: `-${i * 100}%`,
          boxShadow: "0px -5px 80px rgba(0,0,0,0.8)",
          ease: "none",
          duration: 0.3,
        });
      });
    });

    /* 📱 MOBILE — same animation style as earlier stack section */
    mm.add("(max-width: 767px)", () => {
      const GAP = 32; // change to px if you want vertical spacing

      cards2.slice(1).forEach((card, i) => {
        const label = `card2-mobile-${i}`;
        t1.addLabel(label);


        if (i === 0) {
          t1.to(".section-three-header", { height: 0, autoAlpha: 0, duration: 0.1 }, label)
        }

        // Move all cards, but only reveal stack above

        t1.to(
          cards2,
          {
            yPercent: -100 * (i + 1),
            y: `-=${GAP * i}`,
            ease: "none",
          },
          `${label}`
        )
      });
    });

    t1.addLabel("thirdAnim");

    mm.add("(min-width: 768px)", () => {
      t1.to(".section-three-header", {
        autoAlpha: 0.75,
        duration: 0.2
      }, "thirdAnim")
    })

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
      autoAlpha: 0.6,
      y:-200,
      ease: "none",
      duration:0.1,
    }, "fifthAnim")



  }, { scope: container.current })

  return (
    <>
      <div className='container max-w-[1512px] mx-auto text-[#121212]' ref={container}>
        <Header/>
        <HeaderBackground>
          <Third />
        </HeaderBackground>
        <SectionThree />
        <JoinCohort />
      </div>
    </>
  )
}


const Third = () => {
  return <ResponsiveSection className='max-h-[76lvh] mx-[4px] lg:mx-0 flex-1 flex flex-col bg-[#F1F1F1] z-[1] relative third-section mx-[10px] text-[#121212] overflow-hidden'>
    <div className='flex-1 flex flex-col gap-[10px]'>
      <div className='flex flex-col '>
        <div className='flex flex-col lg:flex-row gap-[12px] lg:gap-2'>
          <div className='flex-1 text-[32px] lg:text-[40px] leading-[36px] md:leading-normal font-semibold '>
            Your Journey With Qronic AI
          </div>
          <div className='text-[16px] leading-[22px] text-[#4A4A4A] flex-1 font-medium'>
            Your AI Doctor combines three essential functions to provide continuous, intelligent care.
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center relative z-[1] flex overflow-x-auto hide-scrollbar">
        <div className='flex flex-col lg:hidden'>
          {CARD_DATA.map((card) => (
            <Card
              key={card.position}
              position={card.position}
              title={card.title}
              logo={card.logo}
              img={card.img}
              className="group"
            >
              {card.text}
            </Card>
          ))}
        </div>
        <div className='flex-1 hidden lg:flex'>
          <HoverCards cards={CARD_DATA} />

        </div>
      </div>

    </div>
  </ResponsiveSection>
}

const Card = ({ title, logo, img, children, position = "01", className }) => (
  <div className={cn('flex flex-col-reverse lg:flex-col card w-full bg-white shadow-[0px_10px_20px_0px_#0000000A] rounded-[30px] lg:rounded-[60px] p-[24px] border border-[1px] border-[#B0B0B0] flex gap-[24px] lg:gap-[20px]', className)}>
    <div className='flex-1 flex flex-col gap-[24px] lg:gap-[16px]'>
      <div className='h-[288px] lg:h-[204px] rounded-[30px] lg:rounded-[40px] overflow-hidden'>
        <img src={img} className='w-full h-full object-cover rounded-[30px] lg:rounded-[24px]' />
      </div>
      <div className='flex flex-col gap-[8px]'>
        <div className='font-bold text-[24px] lg:text-[20px] flex flex-col gap-[8px]'>
          <div>{title}</div>
        </div>
        <div className='card-children'>
          {children}
        </div>
      </div>
    </div>
    <div className='font-roboto flex items-end lg:items-center lg:gap-[8px] text-[50px] leading-[42px] lg:text-[32px] lg:leading-normal'>
      <div>
        {position}
      </div>
      <div className="flex flex-col justify-end text-[16px] leading-[26px] font-thin text-[#121212] uppercase">//step</div>
    </div>
  </div>
)

const SectionThree = () => (
  <ResponsiveSection className='text-white relative z-[4] section-three h-lvh overflow-hidden mx-[10px] flex flex-col gap-[32px] border border-[5px] border-white'>

    <div className='flex flex-col gap-[40px] lg:gap-[24px] px-[5px] lg:p-[24px] lg:pt-0'>
      <div className='relative lg:z-[2] pt-[24px] flex items-center bg-[#121212] section-three-header flex-col lg:flex-row gap-[4px]'>
        <div className='flex-1 text-[32px] lg:text-[36px] leading-[36px] lg:leading-normal font-semibold'>No Surprises. No Fine Print. <br className='hidden lg:inline-block'/> Just the Truth.</div>
        <div className='flex-1 text-[16px] leading-[22px] font-medium'>We believe in complete transparency. Here's exactly what you get with Qronic AI, what your insurance already covers, and what's optional.</div>
      </div>
      <div className='relative z-[1] flex flex-col gap-[40px]'>
        <Card2
          title="Included with ChronicAI"
          subtitle="(Everything here is part of the subscription)"
          img="/assets/images/journey/card-1.jpg"
        >
          <li>Your own AI Doctor</li>
          <li>Daily guidance & weekly check-ins</li>
          <li>24/7 messaging & support</li>
          <li>Continuous monitoring of patterns</li>
          <li>Integration with your existing wearables</li>
          <li>Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)</li>
        </Card2>

        <Card2
          title="Covered by Your Insurance"
          subtitle="(Things your existing doctor or insurance already covers)"
          img="/assets/images/journey/card-2.jpg"
        >
          <li>Routine lab tests</li>
          <li>Imaging and results</li>
          <li>Prescription medications</li>
          <li>In-person doctor visits</li>
          <li>Many telehealth visits with clinicians</li>
        </Card2>

        <Card2
          title="User’s Choice"
          subtitle="(Completely optional add-ons; not required)"
          img="/assets/images/journey/card-3.jpg"
        >
          <li>Additional specialty sensors</li>
          <li>Non-standard lab panels</li>
          <li>Extra or premium services</li>
          <li>Any advanced devices not included in starter kit</li>
        </Card2>
      </div>
    </div>
  </ResponsiveSection>
)

const Card2 = ({ title, subtitle, img, children }) => (
  <div className='card-2 rounded-[30px] lg:rounded-[40px] bg-[#2A2A2A] p-[20px] lg:p-[40px] flex flex-col lg:flex-row gap-[32px]'>
    <div className='flex-1 flex flex-col gap-[20px] lg:gap-[24px]'>
      <div>
        <div className='font-bold lg:font-semibold text-[20px] lg:text-[24px] leading-[30px] lg:leading-[40px]'>{title}</div>
        <div className='text-[16px] leading-[22px] lg:leading-[28px]'>{subtitle}</div>
      </div>
      <div className='flex flex-col gap-[8px] px-[20px] text-[16px] leading-[24px] lg:leading-[28px]'>
        {children}
      </div>
    </div>
    <div className="flex-1 relative min-h-[328px] lg:h-[328px] lg:min-h-auto rounded-[24px] overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover object-center rounded-[16px] lg:rounded-[24px]"
      />
    </div>
  </div>
)
export default Journey