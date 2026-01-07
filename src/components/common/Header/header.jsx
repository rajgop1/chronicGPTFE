import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import { cn } from '../../../helpers/utils';
import Separator from '../Separator';
import { HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

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
    <header className='mx-auto max-w-[1512px] header fixed top-0 z-[50] left-0 right-0 text-white'>
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
        <img
          src="/assets/images/star.png"
          alt="active"
          className={cn('w-[16px] h-[16 px] invisible', isActive && "visible")}
        />
        <span className={isActive ? "font-bold" : ""}>{label}</span>
      </div>
    )}
  </NavLink>
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