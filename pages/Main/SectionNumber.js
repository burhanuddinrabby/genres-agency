import React from 'react';

const SectionNumber = ({ children }) => {

    return (
        <div className="container mx-auto px-8" style={{ zIndex: '-1' }}>
            <div className='section-title text-center'>
                <h1 className='text-[50px] hidden lg:block lg:text-[250px]'>{children}</h1>
            </div>
        </div>
    );
};

export default SectionNumber;