import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import clsx from 'clsx';

const questions = {
    'What markets does Precision Trading cover?': 'Precision Trading covers a wide range of markets, including stocks, forex, cryptocurrencies, and commodities. Our algorithms are designed to be versatile and can analyze various asset classes to provide you with comprehensive trading signals.',
    'How does the AI algorithm in Precision Trading work?': 'Our AI algorithm utilizes advanced machine learning techniques to analyze vast amounts of market data, including price movements, volume, and historical trends. It identifies patterns and signals that indicate potential trading opportunities.',
    'Is Precision Trading suitable for beginners?': 'Absolutely! Precision Trading is user-friendly and designed to accommodate traders of all experience levels. Our platform provides detailed explanations and guidance for each trading signal, making it easy for beginners to understand and execute trades.',
    'How do I get started with Precision Trading?': "Getting started with Precision Trading is simple. Choose a subscription plan that fits your needs, and you'll gain access to our trading platform and signals immediately after purchasing from our Whop.",
};

function Question({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full rounded-3xl border border-border-1 bg-background-2 p-5 cursor-pointer select-none shadow-inner' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center justify-between'>
                <span className={clsx('duration-150 text-sm sm:text-base', !isOpen && '!text-foreground-2')}>{title}</span>
                <IconPlus className={clsx('duration-150', isOpen && 'text-accent-1 rotate-45')} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.p initial={{ opacity: 0, translateY: '-25%' }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: '-25%' }} className={clsx('mt-2 text-xs sm:text-sm font-light text-foreground-2')} transition={{ duration: 0.15 }}>
                        {content}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

function Faq() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, translateY: ['25%', 0] }} viewport={{ once: true }} className='w-full max-w-screen-lg mx-auto px-6 mt-44'>
            <img src='/question.png' className='w-full mx-auto max-w-16' />
            <h1 className='mt-8 mb-12 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px] text-center'>Got a question ? We&apos;ve got an answer</h1>

            <div className='space-y-4'>
                {Object.entries(questions).map(([title, content], index) => (
                    <Question key={index} title={title} content={content} />
                ))}
            </div>
        </motion.div>
    );
}

export { Faq };
