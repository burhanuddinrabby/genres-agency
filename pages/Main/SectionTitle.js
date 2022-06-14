import React from 'react';

const SectionTitle = ({ children }) => {

    return (
        <div className="container mx-auto px-8" data-aos="zoom-in">
            <div className='section-title text-center z-10'>
                <h2 className='text-[15px] lg:text-[32px]'>{children}</h2>
                <h3 className='lg:block text-[32px] lg:text-[96px]'>{children}</h3>
            </div>
            <div className='section-title text-center z-10'>
            </div>
        </div>
    );
};

export default SectionTitle;