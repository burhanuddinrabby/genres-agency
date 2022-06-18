import React from 'react';
import Image from 'next/image';
import location from '../../public/image/location1.png';
import location2 from '../../public/image/location2.png';
import clipboard from '../../public/image/clipboard.png';
import SectionNumber from './SectionNumber';
const OurWork = () => {
    return (
        <section className="my-5 lg:px-48 px-4 overflow-hidden">
            <div className='text-[#8E8E8E]' data-aos="fade-right">
                <h1 className="text-3xl md:text-[40px] mt-2 text-black font-bold data-text-sm text-center lg:text-left">Our team try to<br/>do their best</h1>
                <p className="text-sm my-5 text-center lg:text-left">It is a long established fact that a reader will be distracted by <br />
                    the readable content of a page when looking at its layout</p>
                <div className='flex justify-center lg:justify-start'>
                    <button className='btn rounded-none px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary z-40 text-[#fff] border-none cursor-pointer'>Book now</button>
                    </div>
            </div>
            <div className='relative lg:first-letter lg:mt-[-45px] z-10 ' data-aos="fade-left">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-4 font-sans z-10  lg:ml-48 text-center lg:text-left">
                    <div className="lg:p-7 p-5 rounded-md lg:mt-[19rem]">
                        <div className="bg-white w-[83px] h-[83px] rounded-full grid justify-center items-center mx-auto lg:ml-2 mb-5">
                            <Image src={location} width={42} height={42} alt='banner' />
                        </div>
                        <div className="z-10">
                            <SectionNumber>
                                1
                            </SectionNumber>
                            <h1 className="text-2xl mb-4 text-black font-bold">Find User Problem</h1>
                            <p className="text-xs text-[#8E8E8E] lg:w-[82%] w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                    </div>
                    <div className="lg:p-7 p-5 rounded-md lg:mt-40">
                        <div className="bg-white w-[83px] h-[83px] rounded-full grid justify-center items-center  mx-auto lg:ml-2 mb-5">
                            <Image src={clipboard} width={42} height={42} alt='banner' />
                        </div>
                        <div className="z-10">
                            <SectionNumber>
                                2
                            </SectionNumber>
                            <h1 className="text-2xl mb-4 text-black font-bold">Solve The Problem</h1>
                            <p className="text-xs text-[#8E8E8E] lg:w-[82%]  w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                    </div>
                    <div className="lg:p-7 p-5 rounded-md lg:mt-[-4rem] lg:ml-[-5rem] ">
                        <div className="bg-white w-[83px] h-[83px] rounded-full grid justify-center items-center  mx-auto lg:ml-2 mb-5">
                            <Image src={location2} width={42} height={42} alt='banner' />
                        </div>
                        <div className="z-10">
                            <SectionNumber>
                                3
                            </SectionNumber>
                            <h1 className="text-2xl mb-4 text-black font-bold">Deliver Product</h1>
                            <p className="text-xs text-[#8E8E8E] lg:w-[82%]  w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <div className='absolute top-0 left-0' style={{ zIndex: '-1' }}>
                        <svg width="100%" height="410" viewBox="0 0 1252 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 267.5C85.3333 339.667 272.5 463.2 354.5 380C390.5 323.667 478.1 209 540.5 201C565.167 199.333 623.1 199.1 657.5 211.5C712.167 245.167 843.2 292.3 930 211.5C970.333 141.167 1075 0.800077 1171 2.00008H1250.5" stroke="#0569FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 4 6 8" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
