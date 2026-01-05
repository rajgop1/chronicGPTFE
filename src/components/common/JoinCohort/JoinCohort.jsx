import React from 'react'
import Separator from '../Separator'

function JoinCohort() {
    return (
        <div className='bg-[#121212] w-full h-screen rounded-t-[54px] overflow-hidden relative z-[5] join-cohort'>
            <div className='flex flex-col lg:flex-row items-center h-full'>
                <div className='pt-[100px] flex-1 img-container self-stretch'>
                    <img src="/assets/images/bottom-banner.png" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-1 p-[40px] flex flex-col justify-center items-center'>
                    <div className='flex flex-col items-center text-center text-white'>
                        <div className='flex flex-col items-center gap-[6px]'>
                            <p className='flex justify-center items-center w-fit px-[14px] py-[6px] pb-[4px] rounded-[30px] text-white font-bold bg-[#CBCBCB33]'>Limited Spots Available</p>
                            <h2 className='text-[40px] leading-[52px] font-semibold'>Be part of the first cohort.</h2>
                            <p className='text-[20px] font-medium leading-[100%]'>
                                Get full access, all setup support, and early-user <br/> advantages.
                            </p>
                        </div>

                        <div className='py-[40px] w-full'>
                            <Separator variant='v2' />
                        </div>

                        <div className='flex flex-col gap-[16px] items-center'>
                            <button className='bg-white rounded-[12px] px-[16px] py-[10px] text-[18px] text-[#121212] min-w-[320px] font-semibold '>Join first cohort</button>
                            <p className='text-[16px] font-normal'>Takes less than 30 seconds. No commitment required.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JoinCohort