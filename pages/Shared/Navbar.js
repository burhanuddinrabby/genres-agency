import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/image/logo.png';

const Navbar = () => {
    const menuItemStyle = 'text-[#8E8E8E] font-normal hover:bg-transparent hover:text-primary transition-all duration-300'
    const menuItems = <>
        <li className={menuItemStyle}><Link href="/">Home</Link></li>
        <li className={menuItemStyle}><Link href="/service">Service</Link></li>
        <li className={menuItemStyle}><Link href="/booking">Booking</Link></li>
        <li className={menuItemStyle}><Link href="/about">About Us</Link></li>
        <li className={menuItemStyle}><Link href="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar text-black lg:min-w-7xl lg:px-48 lg:flex justify-between">
            <div className="navbar-center w-full flex justify-between">
                <div className="dropdown md:hidden">
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-primary to-secondary text-[#fff] rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <span className='cursor-pointer normal-case p-0'>
                    <Link href='/'>
                        <Image src={logo} alt='logo' width={122} height={25} />
                    </Link>
                </span>
                <div className="navbar-center hidden md:flex justify-evenly">
                    <ul className="p-0 flex flex-row space-x-7">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
