import React from 'react';
import SectionTitle from './SectionTitle';

const GotAProject = () => {
    return (
        <div>
            <SectionTitle>
                Got a project
            </SectionTitle>
            <div className=" lg:px-48 px-4 lg:mt-[140px] mt-[30px] mb-56">
                <form>
                    <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 text-[#7F7F7F] font-poppins grid-cols-1 px-[10%]">
                        <div className='relative input-container'>
                            <input type="text" id='name' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' />
                            <label htmlFor="name" className='lg:left-8 left-1'>Enter Your Name</label>
                        </div>
                        <div className='relative input-container'>
                            <input type="email" id='email' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' />
                            <label className='lg:left-8 left-1' htmlFor="email">Your E-mail</label>
                        </div>
                        <div className='relative input-container'>
                            <input type="text" id='number' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' />
                            <label className='lg:left-8 left-1' htmlFor="number">Your Phone Number</label>
                        </div>
                        <div className='hidden lg:block'></div>
                        <div className='relative input-container'>
                            <input type="text" id='project' className='w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary' />
                            <label className='lg:left-8 left-1' htmlFor="project">About Your Project</label>
                        </div>
                    </div>
                    <button className='btn rounded-none px-12 bg-gradient-to-r from-primary to-secondary text-[#fff] border-none w-[196px] mx-auto block lg:mt-24 mt-10'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default GotAProject;