'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='relative mt-44 md:mt-[600px]'
        >
            <div className='relative w-full border-t border-border-1 backdrop-blur-3xl bg-background-1/90 py-12 before:absolute before:top-[-1px] before:left-1/2 before:-translate-x-1/2 before:h-[1px] before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-accent-1 before:to-transparent before:hidden md:before:block'>
                <div className='w-full max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-12 text-center sm:text-left'>
                    <div className='max-w-sm mx-auto sm:mx-0'>
                        <Link href='/' className='block w-fit mx-auto sm:mx-0'>
                            <img src='/logo.png' className='h-full max-h-6' />
                        </Link>
                        <p className='mt-4 text-xs sm:text-sm font-light text-foreground-2'>© Precision Algo. All rights reserved.<br/>Precision Trading is not a registered financial advisor. </p>
                        <div className='mx-auto sm:mx-0 w-fit flex gap-6 mt-6 *:max-w-4 sm:*:max-w-5 *:duration-150 *:opacity-30 hover:*:opacity-100'>
                            <Link href='https://x.com' target='_blank'>
                                <img src='/x.png' className='w-full' />
                            </Link>
                            <Link href='https://instagram.com' target='_blank'>
                                <img src='/instagram.png' className='w-full' />
                            </Link>
                            <Link href='https://discord.gg' target='_blank'>
                                <img src='/discord.png' className='w-full' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex gap-16 mx-auto sm:mx-0'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm sm:text-lg'>Precision Trading</span>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='#pricing'>Pricing</a>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Tutorials & Guides</a>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Contact</a>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm sm:text-lg'>Legal</span>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Privacy Policy</a>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Terms Of Service</a>
                        </div>
                    </div>
                </div>

            </div>
            <img src='/footerGlow.png' className='absolute -z-30 bottom-0 left-1/2 -translate-x-1/2 max-w-[800px] hidden md:block' />
            <img src='/footerLines.png' className='absolute -z-40 bottom-0 left-1/2 -translate-x-1/2 max-w-[800px] hidden md:block' />
        </motion.div>
    )
}

export default Footer;