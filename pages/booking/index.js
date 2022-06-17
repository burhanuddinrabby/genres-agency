import Head from 'next/head';
import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const booking = () => {
    return (
        <div>
            <Head>
                <title>Booking | Genres</title>
            </Head>
            <Navbar></Navbar>
            <div className="mb-3 lg:px-48 px-4 py-14">

            this is booking
            </div>
            <Footer></Footer>
        </div>
    );
};

export default booking;