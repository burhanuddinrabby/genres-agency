import React, {useEffect, useState} from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import man from '../../public/image/man.jpg'
import woman from '../../public/image/woman.jpg'
import quote from '../../public/image/quote.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Testimonial = () => {
    return (
        <div className='lg:my-36 my-20'>
            <SectionTitle>
                Testimonial
            </SectionTitle>
            <p className='w-full mx-auto text-[#8e8e8e] lg:mt-16 mt-6 text-center'>
                Some of our client satisfaction
            </p>

            {/* <div className="lg:px-48 px-4 lg:mt-24 mt-16">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='grid lg:grid-cols-6 grid-cols-1 mx-auto'>
                            <Image src={man} alt='' />
                            <div className='col-span-5'>
                                <div className='p-12 bg-white'>
                                    <div className="mt-4 mb-10 text-sm text-[#777777] font-[400]">
                                        <Image src={quote} alt='' />
                                    </div>
                                    <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                    <h2 className='text-xl font-[600]'>
                                        Elon Musk
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid lg:grid-cols-6 grid-cols-1 mx-auto'>
                            <Image src={man} alt='' />
                            <div className='col-span-5'>
                                <div className='p-12 bg-white'>
                                    <div className="mt-4 mb-10 text-sm text-[#777777] font-[400]">
                                        <Image src={quote} alt='' />
                                    </div>
                                    <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                    <h2 className='text-xl font-[600]'>
                                        Elon Musk
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}
            <div className="lg:px-48 px-4 lg:mt-24 mt-16">
                <div className="mt-9 font-sans justify-between lg:flex">
                    <div className='relative'>
                        <div className='after:content[""] after:w-[100%] after:h-[100%] after:opacity-80 after:absolute after:top-0 after:left-0 after:bg-[#0F6FFF]'>
                            <div className='relative'>
                                <div className='absolute text-white text-3xl z-10 top-2/4 left-2/4'>
                                    <FontAwesomeIcon icon={faArrowLeftLong} />
                                </div>
                                <Image src={woman} width={210} alt='' />
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex lg:flex-row flex-col mx-10'> */}
                    <div className='grid lg:grid-cols-6 grid-cols-1 mx-10'>
                        <Image src={man} alt='' />
                        <div className='col-span-5'>
                            <div className='p-12 bg-white rounded-r-md rounded-b-md'>
                                <div className="mt-3 mb-8 text-sm text-[#777777] font-[400]">
                                    <Image src={quote} alt='' />
                                </div>
                                <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                <h2 className='text-xl font-[600]'>
                                    Elon Musk
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='relative'>
                        <div className='after:content[""] after:w-[100%] after:h-[100%] after:opacity-80 after:absolute after:top-0 after:left-0 after:bg-[#0F6FFF]'>
                            <div className='relative'>
                                <div className='absolute text-white text-3xl z-10 top-2/4 left-2/4'>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </div>
                                <Image src={man} width={210} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

// const testimonials_list =[
//     {
//         image:man,
//         messege:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
//         author:"Mujahid"
//     },
//     {
//         image:man,
//         messege:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
//         author:"Shajedul Karim"
//     },
//     {
//         image:man,
//         messege:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
//         author:"Labib"
//     },
//     {
//         image:man,
//         messege:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
//         author:"Atika"
//     },
//     {
//         image:man,
//         messege:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
//         author:"Ashraf"
//     },
//     {
//         image:man,
//         messege:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
//         author:"Jhanker Mahbub"
//     },
// ]
//
// const Testimonial = () =>{
//
//     return (
//         <div className='lg:my-36 my-20'>
//             <SectionTitle>
//                 Testimonial
//             </SectionTitle>
//             <p className='w-full mx-auto text-[#8e8e8e] lg:mt-16 mt-6 text-center'>
//                 Some of our client satisfaction
//             </p>
//
//             <div className="lg:px-48 px-2 lg:mt-24 mt-16">
//                 <Splide options={ {   type: 'loop', padding:"4rem", drag:true, focus: 'center', } } aria-labe={"Testimonial"}>
//                     {testimonials_list.map((item, index)=>(
//                         <SplideSlide id={index}>
//                             <div className='grid lg:grid-cols-6 grid-cols-1 mx-10'>
//                                 <Image src={item.image} alt='' />
//                                 <div className='col-span-5'>
//                                     <div className='p-12 bg-white rounded-r-md rounded-b-md'>
//                                         <div className="mt-3 mb-8 text-sm text-[#777777] font-[400]">
//                                             <Image src={quote} alt='' />
//                                         </div>
//                                         <p className='mb-6'>{item.messege}</p>
//                                         <h2 className='text-xl font-[600]'>
//                                             {item.author}
//                                         </h2>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SplideSlide>
//                     ))}
//                 </Splide>
//             </div>
//
//         </div>
//             )
//             }
