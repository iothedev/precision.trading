'use client';

import Link from 'next/link';
import Button from './Button';

import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.header
            animate={{
                opacity: [0, 1],
                translateY: ['-100%', 0],
            }}
            className='w-full max-w-screen-xl mx-auto px-6 mt-12 flex items-center justify-between'
        >
            <Link href='/' className='block max-h-8'>
                <img src='/logo.svg' className='h-full' />
            </Link>

            <Button className='hidden sm:block'>Get Access Now</Button>
        </motion.header>
    );
}

export default Header;
