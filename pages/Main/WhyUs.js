import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import bannerTwo from '../../public/image/client.png'
import fast from '../../public/image/fast.png'
import team from '../../public/image/team.png'
import support from '../../public/image/support.png'
const WhyUs = () => {
    return (
        <>
            <section className='service-section mb-40'>
                <SectionTitle>
                    Why Choose Us?
                </SectionTitle>
                <div className="mb-3 lg:px-48 px-4 lg:mt-[140px] mt-[30px]">
                    <div className="flex items-center flex-col-reverse lg:flex-row-reverse justify-between">
                        <div className="lg:max-w-3xl ease-in-animation" >
                            <Image src={bannerTwo} alt='banner' data-aos="fade-left" />
                        </div>
                        <div className='text-[#8E8E8E] '>
                            <h1 className="text-3xl md:text-[40px] my-3 text-black font-bold data-text-sm text-center lg:text-left" datatext="Starts Here..." data-aos="fade-right">
                                Specialist in client <br /> satisfaction
                            </h1>
                            <div>
                                <div className="flex items-center justify-between mt-12" data-aos="fade-right">
                                    <div className='mr-8'>
                                        <Image src={fast} alt='' />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl text-black font-semibold'>
                                            Deliver Fast
                                        </h3>
                                        <p className='text-sm mt-1'>
                                            We are idea generators, goal seekers. challenge thirsty <br />
                                            professionals creators of unique internet projects
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between my-12" data-aos="fade-right">
                                    <div className='mr-8'>
                                        <Image src={team} alt='' />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl text-black font-semibold'>
                                            Dedicated Team
                                        </h3>
                                        <p className='text-sm mt-1'>
                                            We are idea generators, goal seekers. challenge thirsty <br />
                                            professionals creators of unique internet projects
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-12" data-aos="fade-right">
                                    <div className='mr-8'>
                                        <Image src={support} alt='' />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl text-black font-semibold' >
                                            24/7 Support
                                        </h3>
                                        <p className='text-sm mt-1'>
                                            We are idea generators, goal seekers. challenge thirsty <br />
                                            professionals creators of unique internet projects
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyUs;
