'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Modal from '@/app/components/Modal';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPlus } from '@tabler/icons-react';
import clsx from 'clsx';

function Hero() {
    return (
        <div className='w-full max-w-screen-md mx-auto text-center mt-24 sm:mt-44 px-6'>
            <h1 className='text-3xl sm:text-6xl font-medium !leading-tight tracking-[-2px]'>Maximize profitability with AI-powered trading</h1>
            <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'> Our cutting-edge, AI-powered trading indicator is designed to
                give you the edge in the market by delivering accurate and timely signals.</p>
            <div className='mt-8 flex gap-4 mx-auto w-fit'>
                <Button variant={1} href='https://whop.com/precisionalgo/' target='_blank'>Get Access Now</Button>
                <Button variant={2} href='#pricing'>Pricing</Button>
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

            <div className='relative w-full max-w-screen-xl mx-auto -mt-10 px-6 hidden sm:block'>
                <div className='w-full border border-border-1 bg-background-3 rounded-[44px] p-4 sm:p-6 shadow-[inset_0px_4px_6px_0px_rgba(22,28,24,0.4)]'>
                    <div className='relative overflow-hidden w-full h-full rounded-[24px] border border-border-1 bg-background-2 flex items-center justify-center'>
                        <img
                            src='/thumbnail.png'
                            className='h-full w-full object-cover object-right'
                        />

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
            className='w-full max-w-screen-xl mx-auto sm:mt-24 py-20 px-6 sm:border-t border-border-1'
        >
            <div className='w-full flex items-center justify-center sm:justify-between gap-24 flex-wrap'>
                <div className='text-center flex flex-col relative before:absolute before:bg-accent-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-10 before:rounded-t-xl after:absolute after:bg-accent-1 after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-10 after:blur-lg after:opacity-50'>
                    <img src='/activeUsers.png' className='mx-auto' />
                    <span className='mt-4 text-base sm:text-xl !leading-relaxed font-medium'>5000+</span>
                    <span className='text-sm sm:text-base text-foreground-2'>Active Users</span>
                </div>
                <div className='text-center flex flex-col relative before:absolute before:bg-accent-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-10 before:rounded-t-xl after:absolute after:bg-accent-1 after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-10 after:blur-lg after:opacity-50'>
                    <img src='/winRate.png' className='mx-auto' />
                    <span className='mt-4 text-base sm:text-xl !leading-relaxed font-medium'>98.8%+</span>
                    <span className='text-sm sm:text-base text-foreground-2'>Win Rate</span>
                </div>
                <div className='text-center flex flex-col relative before:absolute before:bg-accent-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-10 before:rounded-t-xl after:absolute after:bg-accent-1 after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-10 after:blur-lg after:opacity-50'>
                    <img src='/star.png' className='mx-auto' />
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

    const features = [
        'Real time, non repainting buy & sell chart signals',
        'Automatic support & resistance trendlines',
        'Phone & desktop notifications (optional)',
        'Automatic stop loss & take profit levels',
        'Automatic divergence detector'
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-xl mx-auto mt-24 pb-44 px-6'
        >
            <div className='w-full flex lg:items-center justify-between gap-12 flex-col lg:flex-row'>
                <img src='/stars.png' className='absolute top-0 right-0 lg:-translate-y-1/2 w-full max-w-screen-md -z-20' />

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

                <div className='space-y-5'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 text-xs sm:text-sm'>
                            <div className='bg-accent-1 text-background-1 h-4 w-4 rounded-md flex items-center justify-center'>
                                <img src='/check.png' className='min-w-[17px]' />
                            </div>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full rounded-3xl border border-border-1 bg-gradient-to-b from-accent-1/20 via-accent-1/5 to-transparent mt-20 p-[1px] relative after:absolute after:w-[85%] sm:after:w-[95%] after:h-4 sm:after:h-8 after:-bottom-4 sm:after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:rounded-b-3xl after:bg-background-4 after:border after:border-border-1 after:-z-10'>
                <div className='w-full h-full bg-background-4 rounded-3xl overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-accent-1/[0.01] before:to-transparent'>
                    <div className='w-full h-full rounded-3xl overflow-hidden'>
                        <img src='/trades.png' className='w-full' />
                    </div>
                </div>
            </div>

            <motion.img
                src='/algoSettings.png'
                animate={{
                    x: parallaxPosition.x,
                    y: parallaxPosition.y,
                }}
                transition={{ duration: 0 }}
                className='backdrop-blur-sm rounded-xl border border-border-1 absolute bottom-12 sm:-bottom-6 lg:bottom-1/4 right-0 -mt-1/2 -ml-1/2 w-1/3 sm:w-72 z-30'
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
                <video src='/radar.mp4' className='absolute -translate-y-1/2 top-0 left-1/2 -translate-x-1/2 mx-auto w-full min-w-[750px] max-w-screen-xl -z-10' autoPlay loop muted playsInline />
                <img src='/logoBoxed.png' className='absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-20 z-30' />

                <div className='relative z-20 w-full border-t pb-44 border-border-1 bg-background-1/80 backdrop-blur-sm'>
                    <div className='w-full max-w-screen-sm mx-auto text-center px-6'>
                        <span className='block w-fit mt-16 sm:mt-20 text-xs sm:text-sm bg-background-2 border border-border-1 rounded-full py-1 px-3 mx-auto'>Worldwide</span>
                        <h1 className='mt-2 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Universal market compatibility</h1>
                        <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'>Seamlessly integrate with a wide range of financial markets. Whether you&apos;re trading stocks, forex, commodities, or cryptocurrency.</p>
                        <Button variant={1} className='mt-6 mx-auto' href='https://whop.com/precisionalgo/' target='_blank'>Get Access Now</Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function Reviews() {
    function Review({ title, content, author }) {
        return (
            <div className='p-3 bg-background-1 border border-border-1 rounded-[32px] shadow-inner min-w-[600px]'>
                <div className='p-4 bg-background-2 border border-border-1 rounded-[20px] shadow-inner h-full'>
                    <span className='text-base sm:text-lg'>{title}</span>
                    <p className='mt-2 block text-xs sm:text-sm text-foreground-2'>{content}</p>
                    <span className='mt-2 block text-accent-1'>- {author}</span>
                </div>
            </div>
        )
    }

    return (
        <div
            className='relative mt-[600px]'
        >
            <div className='relative w-full border-t bg-background-1/90 border-border-1 backdrop-blur-[90px] py-12 before:absolute before:top-[-1px] before:left-1/2 before:-translate-x-1/2 before:h-[1px] before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-accent-1 before:to-transparent before:hidden md:before:block'>
                <h1 className='mx-auto block w-fit font-medium text-2xl sm:text-4xl text-center px-6'>What our users are saying</h1>
                <div className='mt-12 -translate-x-1/2 md:translate-x-0'>
                    <motion.div
                        animate={{
                            translateX: ['-25%', '25%'],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            repeatDelay: 0,
                            ease: 'linear'
                        }}
                        className='flex gap-6 w-fit mx-auto translate-x-12'
                    >
                        <Review
                            title='Transformational Trading Tool!'
                            content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!'
                            author='Alex R'
                        />
                        <Review
                            title='Revolutionized My Trading Approach'
                            content='Precision Algo has revolutionized my approach to trading. The AI-driven analysis and timely signals have made all the difference. I can&apos;t imagine trading without it now.'
                            author='Rachel M.'
                        />
                        <Review
                            title='Unparalleled Market Insights'
                            content='The market insights provided by Precision Algo are unparalleled. It has given me a new level of understanding and control over my trades. My confidence and profits have soared since I started using it.'
                            author='Daniel S.'
                        />
                        <Review
                            title='Transformational Trading Tool!'
                            content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!'
                            author='Alex R'
                        />
                    </motion.div>
                    <motion.div
                        animate={{
                            translateX: ['25%', '-25%'],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            repeatDelay: 0,
                            ease: 'linear'
                        }}
                        className='mt-6 flex gap-6 w-fit mx-auto translate-x-12'
                    >
                        <Review
                            title='Transformational Trading Tool!'
                            content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!'
                            author='Alex R'
                        />
                        <Review
                            title='Revolutionized My Trading Approach'
                            content='Precision Algo has revolutionized my approach to trading. The AI-driven analysis and timely signals have made all the difference. I can&apos;t imagine trading without it now.'
                            author='Rachel M.'
                        />
                        <Review
                            title='Unparalleled Market Insights'
                            content='The market insights provided by Precision Algo are unparalleled. It has given me a new level of understanding and control over my trades. My confidence and profits have soared since I started using it.'
                            author='Daniel S.'
                        />
                        <Review
                            title='Transformational Trading Tool!'
                            content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!'
                            author='Alex R'
                        />
                    </motion.div>
                </div>
            </div>
            <img src='/reviewsGlow.png' className='absolute -z-30 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 max-w-[800px]' />
            <img src='/reviewsLines.png' className='absolute -z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px]' />
        </div>
    )
}

function Faq() {
    function Question({ title, content }) {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div
                className='w-full rounded-3xl border border-border-1 bg-background-2 p-5 cursor-pointer select-none shadow-inner'
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
        'What markets does Precision Trading cover?': 'Precision Trading covers a wide range of markets, including stocks, forex, cryptocurrencies, and commodities. Our algorithms are designed to be versatile and can analyze various asset classes to provide you with comprehensive trading signals.',
        'How does the AI algorithm in Precision Trading work?': 'Our AI algorithm utilizes advanced machine learning techniques to analyze vast amounts of market data, including price movements, volume, and historical trends. It identifies patterns and signals that indicate potential trading opportunities.',
        'Is Precision Trading suitable for beginners?': 'Absolutely! Precision Trading is user-friendly and designed to accommodate traders of all experience levels. Our platform provides detailed explanations and guidance for each trading signal, making it easy for beginners to understand and execute trades.',
        'How do I get started with Precision Trading?': "Getting started with Precision Trading is simple. Choose a subscription plan that fits your needs, and you'll gain access to our trading platform and signals immediately after purchasing from our Whop.",
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-lg mx-auto px-6 mt-44'
        >
            <img src='/question.png' className='w-full mx-auto max-w-16' />
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
            <div className='flex flex-col justify-between rounded-[36px] border border-border-1 p-4 bg-background-2/50 2xl:max-w-96 flex-grow shadow-inner basis-full'>
                <div className='rounded-t-[20px] rounded-b-[10px] border border-border-1 p-4 bg-background-2/95 shadow-inner'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm sm:text-lg relative pl-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-full before:w-[2px] before:bg-accent-1 before:rounded-full'>{term}</span>
                        {discount && (
                            <span className='uppercase text-xs sm:text-sm bg-border-1/10 border border-border-1 text-accent-1 px-3 py-1 rounded-full'>Save {discount * 100}%</span>
                        )}
                    </div>
                    <h1 className='mt-2 font-medium text-xl sm:text-4xl'>${price}<span className='text-foreground-2 text-sm sm:text-base font-light pl-2'>/{term}</span></h1>
                    <p className='mt-2 text-xs sm:text-sm font-light text-foreground-2'>{description}</p>
                </div>
                <div className='mt-6 space-y-2'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 text-xs sm:text-sm'>
                            <div className='bg-accent-1 text-background-1 h-4 w-4 rounded-md flex items-center justify-center'>
                                <img src='/check.png' className='min-w-[17px]' />
                            </div>
                            {feature}
                        </div>
                    ))}
                </div>
                <Button variant={1} className='w-full mt-6'>Purchase {term}</Button>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: ['25%', 0] }}
            viewport={{ once: true }}
            className='w-full max-w-screen-lg 2xl:max-w-screen-2xl mx-auto mt-44 px-6'
            id='pricing'
        >
            <div className='w-full max-w-screen-md mx-auto text-center'>
                <span className='block w-fit text-xs sm:text-sm bg-background-2 border border-border-1 rounded-full py-1 px-3 mx-auto'>Pricing</span>
                <h1 className='mt-2 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Transparent Pricing</h1>
                <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'>Fair pricing, unbeatable value, and exceptional features — whatever your budget is we have the perfect plan for you.</p>
            </div>

            <div className='mt-12 mx-auto w-fit flex flex-wrap lg:flex-nowrap gap-6 2xl:gap-12 2xl:items-center'>
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
            <img src='/logoBoxed.png' className='mx-auto w-full max-w-20' />
            <h1 className='mt-6 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Ready to start trading with<br /><span className='text-accent-1'>Precision Algo?</span></h1>
            <p className='mt-2 text-xs sm:text-sm font-light text-foreground-2'>Maximize your profitability with precision and confidence.</p>
            <div className='mt-6 mx-auto flex gap-4 w-fit'>
                <Button variant={1} href='https://whop.com/precisionalgo/' target='_blank'>Get Access Now</Button>
                <Button variant={2} href='#pricing'>Pricing</Button>
            </div>
        </motion.div>
    )
}

export default function Home() {
    return (
        <>
            <div className='relative w-full border-b border-border-1 pb-16 overflow-hidden'>
                <Header />

                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-96 bg-accent-1/5 rounded-[100%] blur-3xl -z-40' />
                <div className='absolute top-0 left-0 w-full h-full -z-40 bg-gradient-to-t from-background-1 to-transparent' />
                <img src='/hero.gif' className='absolute top-[-10%] left-0 w-full h-[170%] -z-50 hidden sm:block' />

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
