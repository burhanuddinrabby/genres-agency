import Image from 'next/image';
import React from 'react';
import bannerImg from '../../public/image/banner.png'
const success = [
    {
        _id: 1,
        status: "7K+",
        about: "Years Of Excellent"
    },
    {
        _id: 2,
        status: "1K+",
        about: "Project Solved"
    },
    {
        _id: 3,
        status: "100%",
        about: "Client Satisfaction"
    }
]
const Banner = () => {
    return (
        <div className="hero mb-5 lg:px-44 px-4">
            <div className="flex items-center flex-col lg:flex-row-reverse justify-between">
                <Image src={bannerImg} className="rounded-lg min-w-lg shadow-2xl" alt='' />
                <div className='text-[#bcb4b4] '>
                    <h1 className="font-bold text-xs text-primary">A Trusted Agency Service </h1>
                    <h1 className="text-6xl my-2 tracking-wide text-black font-bold data-text-sm" dataText="Starts Here...">Let's Start <br /> Something <br /> Big Together</h1>
                    <p className="text-sm mt-5 mb-2">We are developing top level digital services with our <br />
                        best experienced team, just get started with us</p>
                    <button className='btn rounded-none px-12 bg-gradient-to-r from-primary to-secondary text-[#fff] border-none'>Book now</button>
                    <div className="grid">
                        {
                            success.map((item, index) => {
                                return (
                                    <div className="grid-col-3" key={index}>
                                        <div className="text-center">
                                            <h1 className="text-2xl font-bold">{item.status}</h1>
                                            <p className="text-xs">{item.about}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>                                                                                                                                       
    )                                                                                          
};                     
export default Banner;