import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import { cn } from '../../../helpers/utils';
import Separator from '../Separator';
import { HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { MAX_WIDTH } from '../../constants/css-classes';

function Header() {
  const lenis = useLenis();
  const [menu, setMenu] = useState(false)

  useEffect
    (() => {
      if (!lenis) return;

      if (menu) {
        lenis.stop();     // disable scrolling everywhere
      } else {
        lenis.start();    // restore smooth scroll
      }
    }, [menu, lenis])

  return (
    <header className={cn('mx-auto header fixed top-0 z-[50] left-0 right-0 text-white', MAX_WIDTH)}>
      <div className='flex justify-between items-center px-[24px] md:py-[20px] lg:px-[60px] lg:py-[32px] h-[64px] lg:h-[100px] '>
        <NavLink to="/">
          <img src={"/assets/images/logo.png"} className='w-[30px] h-[24px] lg:h-[40px] lg:w-[50px]' alt='Vite logo' />

        </NavLink>

        <nav className="hidden lg:flex items-center gap-[32px]">
          <NavItem to="/" label="Home" />
          <NavItem to="/safeguards" label="Safeguards" />
          <NavItem to="/journey" label="Journey" />
          <NavItem to="/how-it-works" label="How it Works" />
        </nav>

        <AnimatePresence>
          {menu && (
            <motion.nav
              data-lenis-prevent
              className="overflow-hidden fixed top-0 left-0 w-full h-lvh bg-[#121212] flex flex-col justify-center items-center lg:hidden gap-[32px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <NavItem to="/" label="Home" />
              <NavItem to="/safeguards" label="Safeguards" />
              <NavItem to="/journey" label="Journey" />
              <NavItem to="/how-it-works" label="How it Works" />

              <button
                onClick={() => setMenu(false)}
                className="absolute top-0 right-0 p-[20px]"
              >
                <div className="rounded-full border border-white p-[8px]">
                  <HiOutlineX size="16px" />
                </div>
              </button>
            </motion.nav>
          )}
        </AnimatePresence>


        <div className='lg:hidden' onClick={() => setMenu(true)}>
          <img src="/assets/images/svg/hamburger.svg" alt="menu" className='w-[24px] h-[24px]' />
        </div>
      </div>
      {/* <Separator /> */}
    </header>
  )
}

const NavItem = ({ to, label }) => (
  <NavLink to={to} className="relative inline-block px-2">
    {({ isActive }) => (
      <div className='flex items-center gap-2'>
        {/* <img
          src="/assets/images/star.png"
          alt="active"
          className={cn('w-[16px] h-[16 px] invisible', )}
        /> */}
        <div className={cn("invisible", isActive && "visible")}>
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="paint0_linear" x1="-3" y1="0" x2="15" y2="11.625" gradientUnits="userSpaceOnUse">
                <stop offset="0.504808" stop-color="#B6CE44" />
                <stop offset="0.668269" stop-color="#2DB4FF" />
                <stop offset="0.846154" stop-color="#FF6CEB" />
                <stop offset="0.985577" stop-color="#BF9CF5" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  from="0 7.5 7.5"
                  to="360 7.5 7.5"
                  dur="2s"
                  repeatCount="indefinite" />
              </linearGradient>
            </defs>
            <path d="M7.5 0C7.74835 4.03479 10.9652 7.25165 15 7.5C10.9652 7.74835 7.74835 10.9652 7.5 15C7.25165 10.9652 4.03479 7.74835 0 7.5C4.03479 7.25165 7.25165 4.03479 7.5 0Z"
              fill="url(#paint0_linear)" />
          </svg>
        </div>


        <span className={isActive ? "font-bold" : ""}>{label}</span>
      </div>
    )}
  </NavLink >
);


function MobileMenu({ menu, setMenu }) {
  return (
    <Dialog.Root open={menu} onOpenChange={setMenu}>
      <Dialog.Portal>
        {/* Overlay dark background */}
        <Dialog.Overlay
          data-lenis-prevent
          className="fixed inset-0 bg-[#121212] z-40"
        />

        {/* Menu Content */}
        <Dialog.Content
          data-lenis-prevent
          className="
            fixed inset-0 z-50 flex flex-col justify-center items-center
            w-full h-lvh gap-[32px] md:hidden
          "
        >
          <NavItem to="/" label="Home" />
          <NavItem to="/safeguards" label="Safeguards" />
          <NavItem to="/journey" label="Journey" />
          <NavItem to="/how-it-works" label="How it Works" />

          {/* Close button */}
          <Dialog.Close asChild>
            <button className="absolute top-0 right-0 p-[20px]">
              <div className="rounded-full border border-white p-[8px]">
                <HiOutlineX size={16} />
              </div>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Header