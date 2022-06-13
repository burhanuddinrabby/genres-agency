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
const BannerComponent = () => {
    return (
        <div className="mb-3 lg:px-48 px-4 py-14">
            <div className="flex items-center flex-col lg:flex-row-reverse justify-between">
                <div className="lg:w-[50%]">
                    <Image src={bannerImg} alt='banner' />
                </div>
                <div className='text-[#8E8E8E] lg:w-[50%]'>
                    <h1 className="text-xs text-primary text-center lg:text-left">A Trusted Agency Service </h1>
                    <h1 className="lg:text-6xl  text-4xl  my-3 text-black font-bold data-text-sm leading-tight text-center lg:text-left">Let&apos;s Start <br /> Something<br />Big Together</h1>                    <h1 className="text-6xl my-3 text-black font-bold data-text-sm"></h1>
                    <p className="text-xs my-5 text-center lg:text-left">We are developing top level digital services with our <br />
                        best experienced team, just get started with us</p>
                    <div className='flex justify-center lg:justify-start'><button className='btn rounded-none px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-[#fff] border-none'>Book now</button></div>
                    <div className="flex flex-row flex-wrap py-8 justify-center lg:justify-start">
                        {
                            success.map((item) => {
                                return (
                                    <div className="bg-white md:py-7 py-2 mr-2 mb-2 lg:w-36 px-2 rounded-md cursor-pointer" key={item._id}>
                                        <div className="text-center">
                                            <h1 className="lg:text-4xl text-2xl text-primary font-bold">{item.status}</h1>
                                            <p className="md:text-xs text-[10px] text-black">{item.about}</p>
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
}
export default BannerComponent;
