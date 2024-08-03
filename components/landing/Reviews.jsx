import { motion } from 'framer-motion';

function Review({ title, content, author }) {
    return (
        <div className='p-3 bg-background-1 border border-border-1 rounded-[32px] shadow-inner min-w-[600px]'>
            <div className='p-4 bg-background-2 border border-border-1 rounded-[20px] shadow-inner h-full'>
                <span className='text-base sm:text-lg'>{title}</span>
                <p className='mt-2 block text-xs sm:text-sm text-foreground-2'>{content}</p>
                <span className='mt-2 block text-accent-1'>- {author}</span>
            </div>
        </div>
    );
}

function Reviews() {
    return (
        <div className='relative mt-[600px]'>
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
                            ease: 'linear',
                        }}
                        className='flex gap-6 w-fit mx-auto translate-x-12'
                    >
                        <Review title='Transformational Trading Tool!' content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!' author='Alex R' />
                        <Review title='Revolutionized My Trading Approach' content="Precision Algo has revolutionized my approach to trading. The AI-driven analysis and timely signals have made all the difference. I can't imagine trading without it now." author='Rachel M.' />
                        <Review title='Unparalleled Market Insights' content='The market insights provided by Precision Algo are unparalleled. It has given me a new level of understanding and control over my trades. My confidence and profits have soared since I started using it.' author='Daniel S.' />
                        <Review title='Transformational Trading Tool!' content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!' author='Alex R' />
                    </motion.div>
                    <motion.div
                        animate={{
                            translateX: ['25%', '-25%'],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            repeatDelay: 0,
                            ease: 'linear',
                        }}
                        className='mt-6 flex gap-6 w-fit mx-auto translate-x-12'
                    >
                        <Review title='Transformational Trading Tool!' content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!' author='Alex R' />
                        <Review title='Revolutionized My Trading Approach' content="Precision Algo has revolutionized my approach to trading. The AI-driven analysis and timely signals have made all the difference. I can't imagine trading without it now." author='Rachel M.' />
                        <Review title='Unparalleled Market Insights' content='The market insights provided by Precision Algo are unparalleled. It has given me a new level of understanding and control over my trades. My confidence and profits have soared since I started using it.' author='Daniel S.' />
                        <Review title='Transformational Trading Tool!' content='Precision Algo has completely transformed my trading strategy. The AI-powered signals are incredibly accurate, helping me make informed decisions and boost my profits. Highly recommended!' author='Alex R' />
                    </motion.div>
                </div>
            </div>
            <img src='/reviewsGlow.png' className='absolute -z-30 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 max-w-[800px]' />
            <img src='/reviewsLines.png' className='absolute -z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px]' />
        </div>
    );
}

export { Reviews };
