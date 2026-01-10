import { NavLink } from 'react-router';
import { cn } from '../../../helpers/utils';
import { HiOutlineX } from 'react-icons/hi';
import { motion} from 'framer-motion';
import { MAX_WIDTH } from '../../constants/css-classes';
import * as Dialog from "@radix-ui/react-dialog";


function Header() {
  return (
    <header className={cn('mx-auto header fixed top-0 z-[51] left-0 right-0 text-white', MAX_WIDTH)}>
      <div className='flex justify-between items-center px-[24px] md:py-[20px] lg:px-[60px] lg:py-[32px] h-[64px] lg:h-[100px] '>
        <NavLink to="/">
          <img src={"/assets/images/logo.png"} className='w-[30px] h-[24px] lg:h-[40px] lg:w-[50px]' alt='Vite logo' />
        </NavLink>
        <nav className="hidden lg:flex items-center gap-[32px]">
          <NavItem to="/" label="Home" />
          <NavItem to="/safeguards" label="Safeguards" />
          <NavItem to="/journey" label="Journey" />
          {/* <NavItem to="/how-it-works" label="How it Works" /> */}
        </nav>
        <div className='flex lg:hidden'>
          <MobileMenu />
        </div>
      </div>
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
          className={cn('lg:hidden w-[16px] h-[16 px] invisible', isActive && "visible")}
        />
        <div className={cn("hidden lg:flex relative z-[1] w-[16px] h-[16px] invisible", isActive && "visible")}>
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="paint0_linear" x1="-3" y1="0" x2="15" y2="11.625" gradientUnits="userSpaceOnUse">
                <stop offset="0.504808" stopColor="#B6CE44" />
                <stop offset="0.668269" stopColor="#2DB4FF" />
                <stop offset="0.846154" stopColor="#FF6CEB" />
                <stop offset="0.985577" stopColor="#BF9CF5" />
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

function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button >
          <img src="/assets/images/svg/hamburger.svg" alt="menu" className='w-[24px] h-[24px]' />
        </button>
      </Dialog.Trigger>


      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70"
          />
        </Dialog.Overlay>

        <Dialog.Content asChild>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed z-[101] inset-0 bg-[#121212] flex flex-col justify-center items-center gap-8"
          >
            {/* <Dialog.Title>Mobile Menu</Dialog.Title> */}


            <NavItem to="/" label="Home" />
            <NavItem to="/safeguards" label="Safeguards" />
            <NavItem to="/journey" label="Journey" />
            {/* <NavItem to="/how-it-works" label="How it Works" /> */}

            <Dialog.Close asChild>
              <button className="absolute top-4 right-4 border border-white p-2 rounded-full">
                <HiOutlineX size={16} />
              </button>
            </Dialog.Close>
          </motion.nav>
        </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>

  );
}


export default Header