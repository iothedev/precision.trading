'use client';

import Header from './Header';
import Button from './Button';

import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className='w-full max-w-screen-md mx-auto text-center mt-44'>
            <motion.h1
                animate={{
                    opacity: [0, 1],
                    translateY: ['25%', 0],
                    transition: {
                        delay: 0.2,
                    },
                }}
                className='text-4xl sm:text-6xl font-medium !leading-tight'
            >
                Maximize profitability with AI-powered trading
            </motion.h1>
            <motion.p
                animate={{
                    opacity: [0, 1],
                    translateY: ['25%', 0],
                    transition: {
                        delay: 0.3,
                    },
                }}
                className='mt-5 text-sm sm:text-base text-foreground-2'
            >
                Our cutting-edge, AI-powered trading indicator is designed to
                give you the edge in the market by delivering accurate and
                timely signals.
            </motion.p>
            <motion.div
                animate={{
                    opacity: [0, 1],
                    translateY: ['25%', 0],
                    transition: {
                        delay: 0.4,
                    },
                }}
                className='mt-8'
            >
                <Button>Get Access Now</Button>
            </motion.div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <div className='absolute top-0 left-0 -translate-y-1/2 w-full h-96 bg-accent-1/5 rounded-[100%] blur-3xl -z-50' />
            <Header />
            <Hero />
        </>
    );
}
