'use client';

import Header from './Header';
import Button from './Button';
import Modal from './Modal';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

function Hero() {
    return (
        <div className='w-full max-w-screen-md mx-auto text-center mt-44 px-6'>
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

function Video() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='w-full max-w-screen-lg rounded-2xl border border-border-1 bg-border-1/40 aspect-video overflow-hidden'>
                    <video
                        src='/video.mp4'
                        controls
                        autoPlay
                        className='w-full h-full'
                    />
                </div>
            </Modal>

            <motion.div
                animate={{
                    opacity: [0, 1],
                    translateY: ['25%', 0],
                    transition: {
                        delay: 0.3,
                    },
                }}
                className='w-full max-w-screen-xl mx-auto border border-border-1 bg-background-1 rounded-3xl -mt-12 p-8'
            >
                <div className='relative overflow-hidden w-full h-full rounded-2xl border border-border-1 bg-border-1/40 aspect-video flex items-center justify-center'>
                    <img
                        src='/thumbnail.png'
                        className='absolute top-0 left-0 w-full h-full'
                    />

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className='cursor-pointer select-none h-28 w-28 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-md p-4 group duration-150 hover:p-3'
                    >
                        <div className='w-full h-full rounded-full bg-white/15 border border-white/10 flex items-center justify-center'>
                            <Play />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default function Home() {
    return (
        <>
            <motion.div
                animate={{ opacity: [0, 1] }}
                className='w-full border-b border-border-1 pb-24'
            >
                <div className='absolute top-0 left-0 -translate-y-1/2 w-full h-96 bg-accent-1/5 rounded-[100%] blur-3xl -z-50' />
                
                <Header />
                <Hero />
            </motion.div>
            <Video />
        </>
    );
}
