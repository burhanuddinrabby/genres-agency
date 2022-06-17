import Image from 'next/image';
import React from 'react';
import SectionTitle from '../Main/SectionTitle';
import fast from '../../public/image/fast.png';
const members = [
    {
        _id: 1,
        img:fast,
        name: "Shajedul Karim",
        post: "CEO"
    }
    ,
    {
        _id: 2,
        img:fast,
        name: "Mujahid Islam",
        post: "2D Animator"
    }
    ,
    {
        _id: 3,
        img:fast,
        name: "Burhan Uddin",
        post: "Web Developer"
    }
    ,
    {
        _id: 4,
        img:fast,
        name: "Labib Khan",
        post: "UI/UX Designer"
    }
    ,
]

const OurTeam = () => {
    return (
        <div>
            <SectionTitle>Our Team</SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-16 font-sans">
                {
                    members.map(member => {

                        return (
                            <div key={member._id}>
                                <div className="card lg:max-w-96 md:max-w-md bg-white shadow-xl text-center p-4">
                                    <figure>
                                        <Image src={member.img} height={332} width={332} alt="Shoes" />
                                    </figure>
                                    <div className="py-5">
                                        <h2 className='font-semibold text-xl'>{member.name}</h2>
                                        <p className='text-[#8E8E8E] text-sm'>{member.post}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
};

export default OurTeam;
