import React from 'react';

const SectionTitle = ({ children }) => {

    return (
        <div className="container mx-auto px-8">
            <div className='section-title text-center'>
                <h2>{children}</h2>
                <h3 className='hidden lg:block text-[50px] lg:text-[96px]'>{children}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;