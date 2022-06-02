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
        <div className="mb-3 lg:px-48 px-4">
            <div className="flex items-center flex-col lg:flex-row-reverse justify-between">
                <div className="lg:max-w-3xl">
                    <Image src={bannerImg} alt='banner' />
                </div>
                <div className='text-[#bcb4b4] '>
                    <h1 className="text-xs text-primary">A Trusted Agency Service </h1>
                    <h1 className="text-6xl my-3 tracking-wide text-black font-bold data-text-sm" dataText="Starts Here...">Let&apos;s Start</h1>
                    <h1 className="text-6xl my-4 tracking-wide text-black font-bold data-text-sm" dataText="Starts Here...">Something</h1>
                    <h1 className="text-6xl my-3 tracking-wide text-black font-bold data-text-sm" dataText="Starts Here...">Big Together</h1>
                    <p className="text-sm my-5">We are developing top level digital services with our <br />
                        best experienced team, just get started with us</p>
                    <button className='btn rounded-none px-12 bg-gradient-to-r from-primary to-secondary text-[#fff] border-none'>Book now</button>
                    <div className="grid grid-cols-3 gap-9 mt-9 font-sans">
                        {
                            success.map((item) => {
                                return (
                                    <div className="bg-white lg:p-7 p-5 rounded-md" key={item._id}>
                                        <div className="text-center">
                                            <h1 className="text-4xl  text-primary font-bold">{item.status}</h1>
                                            <p className="text-xs font-semibold text-black">{item.about}</p>
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