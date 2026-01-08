import { NavLink } from "react-router";
import Separator from "../Separator";
import { cn } from "../../../helpers/utils";
import { MAX_WIDTH } from "../../constants/css-classes";

const Footer = () => (
  <div className={cn('relative z-50 mx-auto footer h-fit flex flex-col flex-1 px-[20px] lg:px-[60px]', MAX_WIDTH)}>
    <Separator variant='v2' />
    <div className="flex flex-col ">
      <footer className='py-[40px] flex flex-col gap-[30px] lg:gap-[50px] bg-[#121212]'>
        <div className='lg:px-[20px] grid grid-auto md:grid-cols-2 lg:grid-cols-3 gap-[40px]'>
          <div className='flex flex-col gap-[16px] lg:gap-[24px]'>
            <div className='flex gap-[10px] w-[220px]'>
              <img src={"/assets/images/logo-footer.png"} className='w-full h-full object-cover' alt='Vite logo' />
            </div>
            <div className='text-[14px] lg:text-[16px] font-normal tracking-tight'>
              We offer reliable healthcare insights, expert advice, and digital tools to support your journey towards a healthier lifestyle.
            </div>
          </div>
          <div className='flex flex-col md:items-end lg:items-center gap-[16px]'>
            <NavLink to="" className={"font-medium"}>Quick Links</NavLink>
            <div className='flex flex-col gap-[8px] lg:gap-[10px]'>
              <NavLink to="/" className={"text-[14px]"}>Home</NavLink>
              <NavLink to="/safeguards" className={"text-[14px]"}>Safeguards</NavLink>
              <NavLink to="/journey" className={"text-[14px]"}>Journey</NavLink>
              {/* <NavLink to="" className={"text-[14px]"}>How it Works</NavLink> */}
            </div>
          </div>
          <div className='md:col-span-2 lg:col-span-1 flex flex-col gap-[4px] lg:gap-[20px] md:text-center md:items-center'>
            <div className='font-medium tracking-tight'>Trusted by healthcare professionals & patients alike</div>
            <div className='flex gap-[32px]'>
              <div className='w-[108px]'>
                <img src="/assets/images/hippa-compliant.png" alt="" className='w-full h-full object-cover' />
              </div>
              <div className='w-[64px]'>
                <img src="/assets/images/clinically-tested.png" alt="" className='w-full h-full object-cover' />
              </div>
              <div className='w-[56px]'>
                <img src="/assets/images/private-security.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>

          </div>

        </div>
        <div className="flex flex-col gap-[12px]">
          <Separator variant='v2' className={"invisible lg:visible"} />
          <div className='lg:px-[20px] flex flex-col gap-[40px] lg:flex-row w-full justify-between text-[14px]'>
            <div className='flex flex-wrap flex-col md:flex-row md:justify-center lg:justify-start flex-1 gap-[4px] lg:gap-[32px]'>
              <div>Copyright © ChronicGPT 2026</div>
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
            <div className='flex flex-col gap-[12px] md:justify-center md:items-center lg:justify-start'>
              <Separator variant='v2' className={"flex lg:hidden"} />
              Designed & Developed by Etherealdesign.io
            </div>
          </div>
        </div>
      </footer>
    </div>

  </div>
)

export default Footer