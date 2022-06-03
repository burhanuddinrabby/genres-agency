import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../Shared/Navbar';

const about = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar></Navbar>
            this is about
        </div>
    );
};

export default about;