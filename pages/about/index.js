import Head from 'next/head';
import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AboutTeam from './AboutTeam';
import OurTeam from './OurTeam';

const about = () => {
    return (
        <div>
            <Head>
                <title>About | Genres</title>
            </Head>
            <Navbar></Navbar>
            <div className="mb-3 lg:px-48 px-4 py-14">
                <AboutTeam></AboutTeam>
                {/* <OurTeam></OurTeam> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default about;