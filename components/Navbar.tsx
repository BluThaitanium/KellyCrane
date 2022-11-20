"use client";

import Link from 'next/link';
import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed left-0 top-0 w-screen z-10 ease-in duration-300 backdrop-blur-md'>
            <div className='m-auto flex justify-between items-center text-black'>
                <Link href="/">
                    <h1 className='flex font-bold text-2xl ml-4'>
                        CRANE
                    </h1>
                </Link>
                <ul className='hidden sm:flex'>
                        <li className='p-4'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/#gallery'>Resume</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/portfolio'>Portfolio</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>

                {/* ----- Mobile Functionality ----- */}
                <div onClick={handleNav} className='block sm:hidden z-10 p-4'>
                    {nav ? <AiOutlineClose size={40} color="white" /> : <AiOutlineMenu size={32}/>}
                </div>
                <div className={
                    nav ?
                    'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black opacity-90 bg-text text-center text-white'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-text text-center'
                }>
                    <ul>
                        <li className='p-5 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-5 text-4xl hover:text-gray-500'>
                            <Link href='/#gallery'>Resume</Link>
                        </li>
                        <li className='p-5 text-4xl hover:text-gray-500'>
                            <Link href='/portfolio'>Portfolio</Link>
                        </li>
                        <li className='p-5 text-4xl hover:text-gray-500'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar