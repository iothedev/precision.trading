'use client';

import Link from 'next/link';
import Button from './Button';

import { motion } from 'framer-motion';

function Header() {
    return (
        <header
            animate={{
                opacity: [0, 1],
                translateY: ['-100%', 0],
            }}
            className='w-full max-w-screen-xl mx-auto pb-6 pt-12 px-6 flex items-center justify-between'
        >
            <Link href='/' className='block max-h-8'>
                <img src='/logo.svg' className='h-full' />
            </Link>

            <Button className='hidden sm:flex'>Get Access Now</Button>
        </header>
    );
}

export default Header;
