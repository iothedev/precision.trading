import { Button } from '@/components';
import { motion } from 'framer-motion';

function Cta() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, translateY: ['25%', 0] }} viewport={{ once: true }} className='relative z-20 w-full max-w-screen-sm mx-auto mt-44 text-center px-6'>
            <img src='/logoBoxed.png' className='mx-auto w-full max-w-20' />
            <h1 className='mt-6 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>
                Ready to start trading with
                <br />
                <span className='text-accent-1'>Precision Algo?</span>
            </h1>
            <p className='mt-2 text-xs sm:text-sm font-light text-foreground-2'>Maximize your profitability with precision and confidence.</p>
            <div className='mt-6 mx-auto flex gap-4 w-fit'>
                <Button variant={1} href='https://whop.com/precisionalgo/' target='_blank'>
                    Get Access Now
                </Button>
                <Button variant={2} href='#pricing'>
                    Pricing
                </Button>
            </div>
        </motion.div>
    );
}

export { Cta };
