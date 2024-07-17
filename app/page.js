'use client';

import Header from './Header';
import Button from './Button';
import Modal from './Modal';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPlus, IconCheck } from '@tabler/icons-react';
import clsx from 'clsx';

function Hero() {
    return (
        <div className='w-full max-w-screen-md mx-auto text-center mt-24 sm:mt-44 px-6'>
            <h1 className='text-3xl sm:text-6xl font-medium !leading-tight tracking-[-2px]'>Maximize profitability with AI-powered trading</h1>
            <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'> Our cutting-edge, AI-powered trading indicator is designed to
                give you the edge in the market by delivering accurate and timely signals.</p>
            <div className='mt-8'>
                <Button className='mx-auto'>Get Access Now</Button>
            </div>
        </div>
    );
}

function Video() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='w-full max-w-screen-lg rounded-2xl border border-border-1 bg-background-2 aspect-video overflow-hidden'>
                    <video
                        src='/video.mp4'
                        controls
                        autoPlay
                        className='w-full h-full'
                    />
                </div>
            </Modal>

            <div className='relative w-full max-w-screen-xl mx-auto -mt-10 px-6'>
                <div className='min-h-[600px] aspect-[1.78/1] w-full border border-border-1 bg-background-3 rounded-[44px] p-4 sm:p-6'>
                    <div className='relative overflow-hidden w-full h-full rounded-[24px] border border-border-1 bg-background-2 flex items-center justify-center'>
                        <img
                            src='/thumbnail.png'
                            className='absolute top-0 right-0 h-full w-full object-cover object-right block lg:hidden'
                        />
                        <img
                            src='/thumbnail.png'
                            class='absolute top-0 left-0 w-full h-full hidden lg:block'
                        ></img>

                        {/*<div
                            onClick={() => setIsOpen(!isOpen)}
                            className='my-12 cursor-pointer select-none h-20 sm:h-28 w-20 sm:w-28 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-md p-4 group duration-150 hover:p-3'
                        >
                            <div className='w-full h-full rounded-full bg-white/15 border border-white/10 flex items-center justify-center'>
                                <IconPlayerPlayFilled />
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
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
            className='w-full max-w-screen-xl mx-auto mt-24 pb-44 px-6'
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
                    <p className='mt-5 text-sm sm:text-base font-light text-foreground-2'>
                        Stop missing out of substantial market gains. PercentAlgo identifies significant upward and downward movements across diverse markets and timeframes.
                    </p>
                </div>
            </div>

            <div className='w-full rounded-3xl border border-border-1 bg-background-2/20 mt-12 relative after:absolute after:w-[90%] after:h-4 sm:after:h-8 after:-bottom-4 sm:after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:rounded-b-3xl after:bg-background-2/20 after:border after:border-border-1 after:-z-10'>
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
                className='backdrop-blur-sm rounded-xl border border-border-1 absolute -bottom-24 lg:bottom-0 right-0 -mt-1/2 -ml-1/2 w-1/2 sm:w-72 z-30'
            />
        </motion.div>
    );
}

function UniversalMarketCompatibility() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full mt-96'
        >
            <div className='relative w-full mx-auto'>
                <video src='/radar.mp4' className='absolute bottom-full left-1/2 -translate-x-1/2 mx-auto w-full min-w-[750px] max-w-screen-xl object-bottom' autoPlay loop muted />
                <div className='absolute -translate-y-1/2 left-1/2 -translate-x-1/2 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-background-2/80 backdrop-blur-sm border border-border-1/50 flex items-center justify-center'>
                    <img src='/smallLogo.svg' className='w-full p-6' />
                </div>

                <div className='w-full border-t border-border-1'>
                    <div className='w-full max-w-screen-sm mx-auto text-center px-6'>
                        <span className='block w-fit mt-16 sm:mt-20 text-xs sm:text-sm bg-background-2 border border-border-1 rounded-full py-1 px-3 mx-auto'>Worldwide</span>
                        <h1 className='mt-2 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Universal market compatibility</h1>
                        <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'>Seamlessly integrate with a wide range of financial markets. Whether you&apos;re trading stocks, forex, commodities, or cryptocurrency.</p>
                        <Button className='mt-6 mx-auto'>Get Access Now</Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function Reviews() {
    return <></>
    /*
    return (
        <div className='relative w-full mt-44 py-12 overflow-hidden'>
            <div className='h-[600px] flex-shrink-0'/>
            <div className='relative w-full p-12 backdrop-blur-xl z-20'>
                hi
            </div>
            <img src='reviewsGlow.svg' className='w-full max-w-screen-md absolute left-1/2 bottom-0 -translate-x-1/2' />
        </div>
    )
    */
}

function Faq() {
    function Question({ title, content }) {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div
                className='w-full rounded-3xl border border-border-1 bg-background-2 p-5 cursor-pointer select-none'
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center justify-between'>
                    <span className={clsx('duration-150 text-sm sm:text-base', !isOpen && '!text-foreground-2')}>{title}</span>
                    <IconPlus className={clsx('duration-150', isOpen && 'text-accent-1 rotate-45')} />
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.p
                            initial={{ opacity: 0, translateY: '-25%' }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: '-25%' }}
                            className={clsx('mt-2 text-xs sm:text-sm font-light text-foreground-2')}
                            transition={{ duration: 0.15 }}
                        >
                            {content}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    const questions = {
        'Question 1': 'Precision Algo has revolutionized my approach to trading. The AI-driven analysis and timely signals have made all the difference. I cant imagine trading without it now.',
        'Question 2': 'How do I get started with Precision Algo?',
        'Question 3': 'What kind of support does Precision Algo offer?',
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-lg mx-auto mt-44 px-6'
        >
            <div className='mx-auto h-12 sm:h-16 w-12 sm:w-16 rounded-full bg-background-2 border border-border-1 flex items-center justify-center overflow-hidden relative before:absolute before:h-5 before:w-8 before:bg-accent-1 before:top-0 before:rounded-full before:blur-lg before:opacity-20'>
                <img src='/question.svg' className='w-full p-4 sm:p-6' />
            </div>

            <h1 className='mt-8 mb-12 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px] text-center'>Got a question ? We&apos;ve got an answer</h1>

            <div className='space-y-4'>
                {Object.entries(questions).map(([title, content], index) => (
                    <Question key={index} title={title} content={content} />
                ))}
            </div>
        </motion.div>
    )
}

function Pricing() {
    function PriceCard({ term, price, discount, description, features }) {
        return (
            <div className='rounded-[40px] border border-border-1 p-4 bg-background-2/50 2xl:max-w-96 flex-grow'>
                <div className='rounded-3xl border border-border-1 p-4 bg-background-2/95'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm sm:text-lg relative pl-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-full before:w-[2px] before:bg-accent-1 before:rounded-full'>{term}</span>
                        {discount && (
                            <span className='uppercase text-xs sm:text-sm bg-border-1/40 border border-border-1 text-accent-1 px-3 py-1 rounded-full'>Save {discount * 100}%</span>
                        )}
                    </div>
                    <h1 className='mt-2 font-medium text-xl sm:text-4xl'>${price}<span className='text-foreground-2 text-sm sm:text-base font-light pl-2'>/{term}</span></h1>
                    <p className='mt-2 text-xs sm:text-sm font-light text-foreground-2'>{description}</p>
                </div>
                <div className='mt-6 space-y-2'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 text-xs sm:text-sm'>
                            <div className='bg-accent-1 text-background-1 h-4 w-4 rounded-md flex items-center justify-center'>
                                <IconCheck />
                            </div>
                            {feature}
                        </div>
                    ))}
                </div>
                <Button className='mt-6 w-full'>Purchase {term}</Button>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-2xl mx-auto mt-44 px-6'
        >
            <div className='w-full max-w-screen-md mx-auto text-center'>
                <span className='block w-fit text-xs sm:text-sm bg-background-2 border border-border-1 rounded-full py-1 px-3 mx-auto'>Pricing</span>
                <h1 className='mt-2 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Transparent Pricing</h1>
                <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'>Fair pricing, unbeatable value, and exceptional features — whatever your budget is we have the perfect plan for you.</p>
            </div>

            <div className='mt-12 mx-auto w-fit flex items-center flex-wrap gap-6 2xl:gap-12'>
                <PriceCard
                    term='Monthly'
                    price={49.99}
                    description='Perfect for newcomers who want to get started with AI-powered trading.'
                    features={[
                        'Real time, non repainting buy & sell chart signals',
                        'Customizable phone & desktop notifications',
                        'Automatic support & resistance trendlines',
                        'Automatic stop loss & take profit levels',
                        '24/7 Customer support'
                    ]}
                />

                <div className='hidden 2xl:block bg-border-1 w-[1px] h-44 flex-shrink-0' />

                <PriceCard
                    term='Quarterly'
                    price={134.99}
                    discount={0.1}
                    description='Ideal for intermediate traders looking to enhance their strategies with advanced tools.'
                    features={[
                        'Real time, non repainting buy & sell chart signals',
                        'Customizable phone & desktop notifications',
                        'Automatic support & resistance trendlines',
                        'Automatic stop loss & take profit levels',
                        '24/7 Customer support'
                    ]}
                />

                <div className='hidden 2xl:block bg-border-1 w-[1px] h-44 flex-shrink-0' />

                <PriceCard
                    term='Yearly'
                    price={499.99}
                    description='Designed for professional traders who demand the best.'
                    features={[
                        'Real time, non repainting buy & sell chart signals',
                        'Customizable phone & desktop notifications',
                        'Automatic support & resistance trendlines',
                        'Automatic stop loss & take profit levels',
                        '24/7 Customer support'
                    ]}
                />
            </div>
        </motion.div>
    )
}

function Cta() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='relative z-20 w-full max-w-screen-sm mx-auto mt-44 text-center px-6'
        >
            <div className='mx-auto h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-background-2/80 backdrop-blur-sm border border-border-1/50 flex items-center justify-center overflow-hidden relative before:absolute before:h-5 before:w-8 before:bg-accent-1 before:top-0 before:rounded-full before:blur-lg before:opacity-20'>
                <img src='/smallLogo.svg' className='w-full p-6' />
            </div>
            <h1 class="mt-6 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]">Ready to start trading with<br /><span className='text-accent-1'>Precision Algo?</span></h1>
            <p className='mt-2 text-xs sm:text-sm font-light text-foreground-2'>Maximize your profitability with precision and confidence.</p>
            <div className='mt-6 mx-auto space-x-4 w-fit'>
                <Button>Get Access Now</Button>
            </div>
        </motion.div>
    )
}

function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='relative mt-44 md:mt-96'
        >
            <div className='relative w-full border-t border-border-1 backdrop-blur-xl py-12 before:absolute before:top-[-1px] before:left-1/2 before:-translate-x-1/2 before:h-[1px] before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-accent-1 before:to-transparent before:hidden md:before:block'>
                <div className='w-full max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-6'>
                    <div className='max-w-sm'>
                        <Link href='/' className='block max-h-8'>
                            <img src='/logo.svg' className='h-full' />
                        </Link>
                        <p className='mt-4 text-xs sm:text-sm font-light text-foreground-2'>© Precision Algo. All rights reserved.</p>
                    </div>

                    <div className='flex gap-16'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm sm:text-lg'>Precision Trading</span>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Pricing</a>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Tutorials & Guides</a>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Contact</a>
                        </div>
                        <div className='flex flex-sm gap-2'>
                            <span className='text-base sm:text-lg'>Legal</span>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Privacy Policy</a>
                            <a className='text-xs sm:text-sm font-light text-foreground-2 duration-150 hover:text-foreground-1' href='/'>Terms Of Service</a>
                        </div>
                    </div>
                </div>

            </div>
            <img src='/footerGlow.svg' className='absolute -z-30 bottom-0 left-1/2 -translate-x-1/2 min-w-[800px] hidden md:block' />
        </motion.div>
    )
}

export default function Home() {
    return (
        <>
            <div className='relative w-full border-b border-border-1 pb-16'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-96 bg-accent-1/5 rounded-[100%] blur-3xl -z-40' />
                <div className='absolute top-0 left-0 w-full h-full -z-40 bg-gradient-to-t from-background-1 to-transparent' />
                <img src='/hero.gif' className='absolute top-0 left-0 w-full h-full -z-50' />

                <Header />
                <Hero />
            </div>
            <Video />
            <Statistics />
            <TradeBetter />
            <UniversalMarketCompatibility />
            <Reviews />
            <Faq />
            <Pricing />
            <Cta />
            <Footer />
        </>
    );
}
