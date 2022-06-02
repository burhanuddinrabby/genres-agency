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
        description: "We design your desired website according to your need. We use HTML, CSS, JavaScript, PHP, Shopify. ReactJS."
    }
    ,
    {
        _id: 2,
        name: "App Development",
        image: phone,
        description: "We design your desired website according to your need. We use HTML, CSS, JavaScript, PHP, Shopify. ReactJS."
    }
    ,
    {
        _id: 3,
        name: "UI/UX Design",
        image: scale,
        description: "We design your website, mobile app ui/ux design. So that user can use it esily and experience will amazing"
    }
    ,
    {
        _id: 4,
        name: "2D Animation",
        image: gif,
        description: "We design your website, mobile app ui/ux design. So that user can use it esily and experience will amazing"
    }
    ,
    {
        _id: 5,
        name: "Discord Moderation Bot",
        image: discord,
        description: "We can create discord moderation bot. Where you can run Kick, ban, unban, annoucement, more commands"
    }
    ,
    {
        _id: 6,
        name: "Discord Moderation Bot",
        image: discord,
        description: "We can create discord moderation bot. Where you can run Kick, ban, unban, annoucement, more commands"
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
                <div className="lg:px-48 px-4">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-9 font-sans">
                        {
                            services.map((service) => {
                                return (
                                    <div className="bg-white lg:p-7 p-5 rounded-md" key={service._id}>
                                        <div className="grid justify-center mt-12 mb-5">
                                            <Image src={service.image} width={50} height={50} alt='banner' />
                                        </div>
                                        <div className="text-center">
                                            <h1 className="text-2xl mb-4 text-black font-bold">{service.name}</h1>
                                            <p className="text-xs font-semibold text-[#8E8E8E] w-[82%] mb-12 text-center mx-auto">{service.description}</p>
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