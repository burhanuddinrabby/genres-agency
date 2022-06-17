import React from 'react';
import web from '../../public/image/www.png'
import discord from '../../public/image/discord.png'
import content from '../../public/image/content.png'
import phone from '../../public/image/phone.png'
import scale from '../../public/image/uiux.png'
import gif from '../../public/image/gif.png'
import SectionTitle from './SectionTitle';
import Image from 'next/image';

`

`
const services = [
    {
        _id: 1,
        name: "Web Development",
        image: web,
        title: "Get frontend or backend or both",
        description: <>
            <li> SEO - friendly website with Next.js</li>
            <li>Dynamic website with React</li>
            <li>Tools: MongoDB, Firebase, Node.js, MySQL</li>
        </>,
        hoverClass: "bg-card-1",

    }
    ,
    {
        _id: 2,
        name: "App Development",
        image: phone,
        description: "We design your desired website according to your need. We use HTML, CSS, JavaScript, PHP, Shopify. ReactJS.",
        hoverClass: "bg-card-2"
    }
    ,
    {
        _id: 3,
        name: "UI/UX Design",
        image: scale,
        description: <>
            <li>Wireframe or prototype</li>
            <li>Website/App design</li>
            <li>UI or UX or both</li>
        </>,
        hoverClass: "bg-card-3"
    }
    ,
    {
        _id: 4,
        name: "2D Animation",
        image: gif,
        description: <>
            <li>Update/create new animation on Lottie files</li>
            <li>Animate or video edit any type of video</li>
            <li>Meme-ize videos</li>
        </>,
        hoverClass: "bg-card-4"
    }
    ,
    {
        _id: 5,
        name: "Discord Moderation Bot",
        image: discord,
        title:"You can get your custom bot with custom name",
        description: <>
            <li>Kick or ban/unban,track invites</li>
            <li>Delete bulk messages, reaction roles</li>
            <li>Channel lockdown (prevent raids)</li>
            <li>set custom moderation commands</li>
            <li>if needed we can train you to use it</li>
            <li>music command included (if you need)</li>
        </>,
        hoverClass: "bg-card-5"
    }
    ,
    {
        _id: 6,
        name: "Content Writing ",
        image: content,
       description: <>
       <li>Viral content (hopefully)</li>
       <li>SEO-refined blogs</li>
       <li>Conversational and friendly writing  </li>
       <li>Create information-dense but consise tweets</li>
        </>,
        hoverClass: "bg-card-6"
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
                <p className='w-80 lg:w-96 mx-auto text-[#8e8e8e] lg:mt-16 mt-6 text-center' data-aos="fade-up">
                    A skilled team is ready to provide any digital support to get your startup running right away.
                </p>
                <div className="lg:px-48 px-4 lg:mt-24 mt-16">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-9 font-sans">
                        {
                            services.map((service) => {
                                return (
                                    <div className={`bg-white lg:p-7 p-5 rounded-md group hover:-translate-y-4 transition-all duration-300 ${service.hoverClass} cursor-pointer`} key={service._id} data-aos="zoom-in">
                                        <div className="grid justify-center mt-12 mb-5">
                                            <Image src={service.image} width={50} height={50} alt='banner' />
                                        </div>
                                        <div className="text-center">
                                            <h1 className="text-2xl mb-4 text-black font-bold group-hover:text-white">{service.name}</h1>
                                            <p className="text-sm text-[#8E8E8E] mb-4 group-hover:text-white mx-auto">
                                                {service?.title}
                                            </p>
                                            <ul className="text-left list-disc w-[60%] block  mx-auto  text-xs text-[#8E8E8E] mb-12 group-hover:text-white">
                                                {service.description}
                                            </ul>
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
