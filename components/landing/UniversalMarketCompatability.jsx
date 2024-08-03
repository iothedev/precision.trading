import { Button } from '@/components';
import { motion } from 'framer-motion';

function UniversalMarketCompatibility() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, translateY: ['25%', 0] }} viewport={{ once: true }} className='w-full mt-96'>
            <div className='relative w-full mx-auto'>
                <video src='/radar.mp4' className='absolute -translate-y-1/2 top-0 left-1/2 -translate-x-1/2 mx-auto w-full min-w-[750px] max-w-screen-xl -z-10' autoPlay loop muted playsInline />
                <img src='/logoBoxed.png' className='absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-20 z-30' />

                <div className='relative z-20 w-full border-t pb-44 border-border-1 bg-background-1/80 backdrop-blur-sm'>
                    <div className='w-full max-w-screen-sm mx-auto text-center px-6'>
                        <span className='block w-fit mt-16 sm:mt-20 text-xs sm:text-sm bg-background-2 border border-border-1 rounded-full py-1 px-3 mx-auto'>Worldwide</span>
                        <h1 className='mt-2 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Universal market compatibility</h1>
                        <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'>Seamlessly integrate with a wide range of financial markets. Whether you&apos;re trading stocks, forex, commodities, or cryptocurrency.</p>
                        <Button variant={1} className='mt-6 mx-auto' href='https://whop.com/precisionalgo/' target='_blank'>
                            Get Access Now
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export { UniversalMarketCompatibility };
