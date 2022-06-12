import React from 'react';
import web from '../../public/image/www.png'
import discord from '../../public/image/discord.png'
import phone from '../../public/image/phone.png'
import scale from '../../public/image/uiux.png'
import gif from '../../public/image/gif.png'
import SectionTitle from './SectionTitle';
import Image from 'next/image';
const services = [
    {
        _id: 1,
        name: "Web Development",
        image: web,
        description: "We design your desired website according to your need. We use HTML, CSS, JavaScript, PHP, Shopify. ReactJS.",
        hoverClass:"bg-card-1"
    }
    ,
    {
        _id: 2,
        name: "App Development",
        image: phone,
        description: "We design your desired website according to your need. We use HTML, CSS, JavaScript, PHP, Shopify. ReactJS.",
        hoverClass:"bg-card-2"
    }
    ,
    {
        _id: 3,
        name: "UI/UX Design",
        image: scale,
        description: "We design your website, mobile app ui/ux design. So that user can use it esily and experience will amazing",
        hoverClass:"bg-card-3"
    }
    ,
    {
        _id: 4,
        name: "2D Animation",
        image: gif,
        description: "We design your website, mobile app ui/ux design. So that user can use it esily and experience will amazing",
        hoverClass:"bg-card-4"
    }
    ,
    {
        _id: 5,
        name: "Discord Moderation Bot",
        image: discord,
        description: "We can create discord moderation bot. Where you can run Kick, ban, unban, annoucement, more commands",
        hoverClass:"bg-card-5"
    }
    ,
    {
        _id: 6,
        name: "Discord Moderation Bot",
        image: discord,
        description: "We can create discord moderation bot. Where you can run Kick, ban, unban, annoucement, more commands",
        hoverClass:"bg-card-6"
    }
    ,
]
const OurServices = () => {
    return (
        <>
            <section className='service-section py-24'>
                <SectionTitle>
                    Our Services
                </SectionTitle>
                <p className='w-80 lg:w-96 mx-auto text-[#8e8e8e] lg:mt-16 mt-6 text-center'>
                    We are developing top level digital srevices with our
                    best expierenced team, just get started with us
                </p>
                <div className="lg:px-48 px-4 lg:mt-24 mt-16">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-9 font-sans">
                        {
                            services.map((service) => {
                                return (
                                    <div className={`bg-white lg:p-7 p-5 rounded-md group hover:-translate-y-4 transition-all duration-300 ${service.hoverClass} cursor-pointer`} key={service._id}>
                                        <div className="grid justify-center mt-12 mb-5">
                                            <Image src={service.image} width={50} height={50} alt='banner' />
                                        </div>
                                        <div className="text-center">
                                            <h1 className="text-2xl mb-4 text-black font-bold group-hover:text-white">{service.name}</h1>
                                            <p className="text-xs text-[#8E8E8E] w-[82%] mb-12 group-hover:text-white text-center mx-auto">{service.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurServices;
