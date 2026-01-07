import React from 'react'
import { NavLink } from 'react-router';
import { cn } from '../../../helpers/utils';
import Separator from '../Separator';

function Header() {
    return (
        <header className='mx-auto max-w-[1512px] header fixed top-0 z-50 left-0 right-0 '>
            <div className='flex justify-between items-center px-[24px] py-[20px] lg:px-[60px] lg:py-[32px] h-[100px] '>
                <NavLink to="/">
                    <img src={"/assets/images/logo.png"} className='w-[30px] h-[24px] lg:h-[40px] lg:w-[50px]' alt='Vite logo' />
                </NavLink>

                <nav className="hidden lg:flex items-center gap-[32px]">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/safeguards" label="Safeguards" />
                    <NavItem to="/journey" label="Journey" />
                    <NavItem to="/how-it-works" label="How it Works" />
                </nav>

                <div className='lg:hidden'>
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


export default Header