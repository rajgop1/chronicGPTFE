import React, { useState } from 'react'
import Separator from '../Separator'
import AppDialog from '../Dialog/AppDialog'
import FormInput from '../Form/FormInput'
import { HiOutlineXCircle } from "react-icons/hi2";
import FormTextArea from '../Form/FormTextArea';
import FormSelect from '../Form/FormSelect';

function JoinCohort() {
    const [open, setOpen] = useState(false)

    async function sendRequest() {

    }

    return (
        <div className='bg-[#121212] w-full h-dvh rounded-t-[54px] overflow-hidden relative z-[5] join-cohort'>
            <div className='flex flex-col lg:flex-row items-center h-full'>
                <div className='pt-[100px] flex-1 img-container self-stretch'>
                    <img src="/assets/images/bottom-banner.png" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-1 p-[40px] flex flex-col justify-center items-center'>
                    <div className='flex flex-col items-center text-center text-white'>
                        <div className='flex flex-col items-center gap-[6px]'>
                            <p className='flex justify-center items-center w-fit text-[14px] md:text-[16px] px-[14px] py-[6px] pb-[4px] rounded-[30px] text-white font-bold bg-[#CBCBCB33]'>Limited Spots Available</p>
                            <h2 className='text-[30px] md:text-[40px] leading-[52px] font-semibold'>Be part of the first cohort.</h2>
                            <p className='text-[16px] md:text-[20px] font-medium leading-[100%]'>
                                Get full access, all setup support, and early-user <br /> advantages.
                            </p>
                        </div>

                        <div className='py-[20px] md:py-[40px] w-full'>
                            <Separator variant='v2' />
                        </div>

                        <div className='flex flex-col gap-[16px] items-center'>
                            {/* Dialog */}
                            <AppDialog
                                trigger={
                                    <button className='cursor-pointer bg-white rounded-[12px] px-[16px] py-[10px] text-[18px] text-[#121212] min-w-[320px] font-semibold '>Join first cohort</button>
                                }>
                                {/* <p>We’ll collect your details and get you onboarded.</p> */}
                                <div className='flex flex-col md:flex-row gap-[24px] md:gap-0 items-start text-[#121212] md:pr-[48px]'>
                                    <div className='flex-1 flex flex-col gap-[8px]'>
                                        <div className='flex flex-col gap-[8px]'>
                                            <div className='text-[30px] font-bold'>Join the Waitlist</div>
                                        </div>
                                        <div className='text-[38px] leading-[42px] font-thin'>
                                            Be among the first to experience personalized AI Doctor care
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col md:px-[80px]'>
                                        <div className='flex flex-col gap-[32px] '>
                                            <div className='flex flex-col md:flex-row gap-[24px] flex-1'>
                                                <FormInput
                                                    label="First Name"
                                                    id="first-name"
                                                    placeholder="Enter your First name"
                                                    className={"w-full"}
                                                />
                                                <FormInput
                                                    label="Last Name"
                                                    id="last-name"
                                                    placeholder="Enter your Last name"
                                                    className={"w-full"}
                                                />
                                            </div>

                                            <FormInput
                                                label="Phone Number"
                                                id="phone"
                                                placeholder="Enter your Phone Number"
                                                className={"w-full"}
                                            />

                                            <FormInput
                                                label="Email"
                                                id="email"
                                                placeholder="Email"
                                                className={"w-full"}
                                            />

                                            <FormSelect
                                                label="Primary Condition (Optional)"
                                                id="primary-condition"
                                                placeholder="Select a program"
                                                options={[
                                                    { label: "Sleep Optimization", value: "sleep" },
                                                    { label: "Energy Balance", value: "energy" },
                                                    { label: "Metabolic Health", value: "metabolic" },
                                                ]}
                                            />

                                            <FormTextArea
                                                label="Additional Information (Optional)"
                                                id="additional-information"
                                                placeholder="Tell us about your health goal or questions..."
                                                className={"w-full"}
                                                rows={6}
                                            />
                                            <AppDialog trigger={
                                                <button onClick={sendRequest} className='cursor-pointer bg-[#121212] text-white rounded-[12px] px-[16px] py-[10px] text-[18px] text-[#121212] min-w-[320px] font-semibold '>Request</button>
                                            }
                                                className={"max-w-[480px]"}
                                            >
                                                <div className='text-2xl text-black'>
                                                    Request Sent!
                                                </div>

                                            </AppDialog>
                                        </div>

                                    </div>

                                    {/* <div className='shrink-0'>
                                        <img src="/assets/icons/close.svg" alt="" className='w-[48px] h-[48px]' />
                                    </div> */}

                                </div>
                            </AppDialog>
                            <p className='text-[16px] font-normal'>Takes less than 30 seconds. No commitment required.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default JoinCohort