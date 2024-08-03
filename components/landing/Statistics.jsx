import { motion } from 'framer-motion';

function Statistics() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, translateY: ['25%', 0] }} viewport={{ once: true }} className='relative z-20 w-full max-w-screen-xl mx-auto sm:mt-24 py-20 px-6 sm:border-t border-border-1'>
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
    );
}

export { Statistics };
