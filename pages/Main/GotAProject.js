import React from 'react';
import SectionTitle from './SectionTitle';

const GotAProject = () => {
    return (
        <div>
            <SectionTitle>
                Got a project
            </SectionTitle>
            <div className="lg:px-48 px-4 lg:mt-[140px] mt-[30px]">
                <form data-aos="fade-up">
                    <div className="flex flex-wrap flex-col lg:flex-row lg:justify-between text-[#7F7F7F] font-poppins grid-cols-1 px-[10%]">
                        <div className='relative input-container lg:w-[47%] mb-12'>
                            <input type="text" id='name' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' required />
                            <label htmlFor="name" className='lg:left-8 left-1'>Enter Your Name</label>
                        </div>
                        <div className='relative input-container lg:w-[47%] mb-12'>
                            <input type="name" id='email' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' required />
                            <label className='lg:left-8 left-1' htmlFor="email">Your E-mail</label>
                        </div>
                        <div className='relative input-container lg:w-[47%] mb-12'>
                            <input type="text" id='number' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' required />
                            <label className='lg:left-8 left-1' htmlFor="number">Your Phone Number</label>
                        </div>
                        <div className='hidden lg:block'></div>
                        <div className='relative input-container lg:w-full mb-12'>
                            <input type="text" id='project' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' required />
                            <label className='lg:left-8 left-1' htmlFor="project">About Your Project</label>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-start'><button className='btn rounded-none px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-[#fff] border-none w-[196px] mx-auto block lg:mt-18 mt-6'>Send</button></div>
                </form>
            </div>
        </div>
    );
};

export default GotAProject;
