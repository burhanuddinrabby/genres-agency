import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/image/logo.png';

const Navbar = () => {
    const menuItems = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/service">Service</Link></li>
        <li><Link href="/booking">Booking</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar text-black lg:min-w-7xl lg:px-52 lg:flex justify-between">
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost mr-48 p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-primary to-secondary text-[#fff] rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <span className='btn btn-ghost normal-case p-0 lg:ml-[-32px]'>
                    <Link href='/'>
                        <Image src={logo} alt='logo' width={122} height={25} />
                    </Link>
                </span>
            </div>
            <div className="navbar-center hidden lg:flex justify-evenly">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;