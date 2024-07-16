'use client';

import Link from 'next/link';
import Button from './Button';

function Header() {
    return (
        <header className='w-full max-w-screen-xl mx-auto pb-6 pt-12 px-6 flex items-center justify-between'>
            <Link href='/' className='block max-h-8'>
                <img src='/logo.svg' className='h-full' />
            </Link>

            <Button className='hidden sm:flex'>Get Access Now</Button>
        </header>
    );
}

export default Header;
