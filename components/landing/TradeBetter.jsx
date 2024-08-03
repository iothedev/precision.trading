import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

    const features = ['Real time, non repainting buy & sell chart signals', 'Automatic support & resistance trendlines', 'Phone & desktop notifications (optional)', 'Automatic stop loss & take profit levels', 'Automatic divergence detector'];

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, translateY: ['25%', 0] }} viewport={{ once: true }} className='w-full max-w-screen-xl mx-auto mt-24 pb-44 px-6'>
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
                        <p className='mt-5 text-sm sm:text-base font-light text-foreground-2'>Stop missing out of substantial market gains. PercentAlgo identifies significant upward and downward movements across diverse markets and timeframes.</p>
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

export { TradeBetter };
