'use client';

import Link from 'next/link';
import { Button } from '@/app/components';

function Header() {
    return (
        <header className='relative w-full max-w-screen-xl mx-auto pb-6 pt-12 px-6 flex items-center justify-between z-50'>
            <Link href='/' className='block'>
                <img src='/logo.png' className='h-full max-h-6' />
            </Link>

            <div className='hidden md:block py-3 px-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-inner space-x-8 text-xs sm:text-sm text-foreground-2'>
                <Link href='#pricing' className='duration-150 hover:text-foreground-1 border-white/5 rounded-full px-3 py-2 hover:border hover:bg-white/[0.025]'>Pricing</Link>
                <Link href='#' className='duration-150 hover:text-foreground-1 border-white/5 rounded-full px-3 py-2 hover:border hover:bg-white/[0.025]'>Tutorials & Guides</Link>
                <Link href='#' className='duration-150 hover:text-foreground-1 border-white/5 rounded-full px-3 py-2 hover:border hover:bg-white/[0.025]'>Contact</Link>
            </div>

            <Button variant={1} className='hidden sm:flex' href='https://whop.com/precisionalgo/' target='_blank'>Get Access Now</Button>
        </header>
    );
}

export { Header };
