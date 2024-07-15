'use client';

import Header from './Header';
import Button from './Button';
import Modal from './Modal';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

function Background() {
    const [documentHeight, setDocumentHeight] = useState(0);

    const updateDocumentHeight = () => {
        setDocumentHeight(document.documentElement.offsetHeight);
    };

    useEffect(() => {
        updateDocumentHeight();

        window.addEventListener('resize', updateDocumentHeight);

        return () => {
            window.removeEventListener('resize', updateDocumentHeight);
        };
    }, []);

    return (
        <div
            className='absolute top-0 left-0 w-full bg-gradient-to-b from-background-1 to-background-2 -z-50'
            style={{ height: `${documentHeight}px` }}
        />
    );
}

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
                className='text-3xl sm:text-6xl font-medium !leading-tight'
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
                className='w-full max-w-screen-xl mx-auto -mt-8 px-6'
            >
                <div className='w-full border border-border-1 bg-background-1/10 backdrop-blur-sm rounded-3xl p-4 sm:p-8'>
                    <div className='relative overflow-hidden w-full h-full rounded-2xl border border-border-1 bg-border-1/40 aspect-video flex items-center justify-center'>
                        <img
                            src='/thumbnail.png'
                            className='absolute top-0 left-0 w-full h-full'
                        />

                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='cursor-pointer select-none h-20 sm:h-28 w-20 sm:w-28 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-md p-4 group duration-150 hover:p-3'
                        >
                            <div className='w-full h-full rounded-full bg-white/15 border border-white/10 flex items-center justify-center'>
                                <Play />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

function Statistics() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-xl mx-auto mt-24 py-20 px-6 border-t border-border-1'
        >
            <div className='w-full flex items-center justify-center sm:justify-between gap-24 flex-wrap'>
                <div className='text-center flex flex-col relative before:absolute before:bg-accent-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-10 before:rounded-t-xl after:absolute after:bg-accent-1 after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-10 after:blur-lg after:opacity-50'>
                    <img src='/activeUsers.svg' className='mx-auto' />
                    <span className='mt-4 text-base sm:text-xl !leading-relaxed font-medium'>5000+</span>
                    <span className='text-sm sm:text-base text-foreground-2'>Active Users</span>
                </div>
                <div className='text-center flex flex-col relative before:absolute before:bg-accent-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-10 before:rounded-t-xl after:absolute after:bg-accent-1 after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-10 after:blur-lg after:opacity-50'>
                    <img src='/winRate.svg' className='mx-auto' />
                    <span className='mt-4 text-base sm:text-xl !leading-relaxed font-medium'>98.8%+</span>
                    <span className='text-sm sm:text-base text-foreground-2'>Win Rate</span>
                </div>
                <div className='text-center flex flex-col relative before:absolute before:bg-accent-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-10 before:rounded-t-xl after:absolute after:bg-accent-1 after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-10 after:blur-lg after:opacity-50'>
                    <img src='/star.svg' className='mx-auto' />
                    <span className='mt-4 text-base sm:text-xl !leading-relaxed font-medium'>4.9/5</span>
                    <span className='text-sm sm:text-base text-foreground-2'>Overall Rating</span>
                </div>
            </div>
        </motion.div>
    )
}

function TradeBetter() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [parallaxPosition, setParallaxPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const calculateParallax = (position, axis) => {
            const middle = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2;
            const move = axis === 'x' ? (position - middle) / 50 : (position - middle) / 50;
            return move;
        };

        setParallaxPosition({
            x: calculateParallax(mousePosition.x, 'x'),
            y: calculateParallax(mousePosition.y, 'y'),
        });
    }, [mousePosition]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-xl mx-auto mt-24 px-6'
        >
            <div className='w-full max-w-screen-md flex items-stretch gap-6'>
                <div className='relative w-[3px] bg-border-1 rounded-full flex-shrink-0'>
                    <div className='rounded-full absolute top-0 left-0 w-full h-1/2 bg-accent-1' />
                </div>
                <div className='flex-grow'>
                    <h1 className='font-medium text-2xl sm:text-4xl'>
                        Trade better with
                        <br />
                        <span className='text-accent-1'>Precision Algo</span>
                    </h1>
                    <p className='mt-5 text-sm sm:text-base text-foreground-2'>
                        Stop missing out of substantial market gains. PercentAlgo identifies significant upward and downward movements across diverse markets and timeframes.
                    </p>
                </div>
            </div>

            <div className='w-full rounded-3xl border border-border-1 bg-background-3/20 mt-12 relative after:absolute after:w-[90%] after:h-4 sm:after:h-8 after:-bottom-4 sm:after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:rounded-b-3xl after:bg-background-3/20 after:border after:border-border-1 after:-z-10'>
                <div className='w-full h-full rounded-3xl overflow-hidden'>
                    <img src='/trades.png' className='w-full' />
                </div>
            </div>

            <motion.img
                src='/algoSettings.svg'
                animate={{
                    x: parallaxPosition.x,
                    y: parallaxPosition.y,
                }}
                transition={{ duration: 0 }}
                className='absolute bottom-0 right-0 -mt-1/2 -ml-1/2'
            />
        </motion.div>
    );
}

export default function Home() {
    return (
        <>
            <Background />
            <div className='w-full border-b border-border-1 pb-20'>
                <div className='absolute top-0 left-0 -translate-y-1/2 w-full h-96 bg-accent-1/5 rounded-[100%] blur-3xl -z-50' />
                <Header />
                <Hero />
            </div>
            <Video />
            <Statistics />
            <TradeBetter />

            <div className='h-96' />
        </>
    );
}
