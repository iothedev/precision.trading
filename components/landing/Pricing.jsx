import { Button } from '@/components';
import { motion } from 'framer-motion';

function PriceCard({ term, price, discount, description, features, store }) {
    return (
        <div className='flex flex-col justify-between rounded-[36px] border border-border-1 p-4 bg-background-2/50 2xl:max-w-96 flex-grow shadow-inner basis-full'>
            <div className='rounded-t-[20px] rounded-b-[10px] border border-border-1 p-4 bg-background-2/95 shadow-inner'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm sm:text-lg relative pl-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-full before:w-[2px] before:bg-accent-1 before:rounded-full'>{term}</span>
                    {discount && <span className='uppercase text-xs sm:text-sm bg-border-1/10 border border-border-1 text-accent-1 px-3 py-1 rounded-full'>Save {discount * 100}%</span>}
                </div>
                <h1 className='mt-2 font-medium text-xl sm:text-4xl'>
                    ${price}
                    <span className='text-foreground-2 text-sm sm:text-base font-light pl-2'>/{term}</span>
                </h1>
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
            <Button variant={1} className='w-full mt-6' href={store} target='_blank'>
                Purchase {term}
            </Button>
        </div>
    );
}

function Pricing() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, translateY: ['25%', 0] }} viewport={{ once: true }} className='w-full max-w-screen-lg 2xl:max-w-screen-2xl mx-auto mt-44 px-6' id='pricing'>
            <div className='w-full max-w-screen-md mx-auto text-center'>
                <span className='block w-fit text-xs sm:text-sm bg-background-2 border border-border-1 rounded-full py-1 px-3 mx-auto'>Pricing</span>
                <h1 className='mt-2 text-2xl sm:text-4xl font-medium !leading-tight tracking-[-2px]'>Transparent Pricing</h1>
                <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'>Fair pricing, unbeatable value, and exceptional features — whatever your budget is we have the perfect plan for you.</p>
            </div>

            <div className='mt-12 mx-auto w-fit flex flex-wrap lg:flex-nowrap gap-6 2xl:gap-12 2xl:items-center'>
                <PriceCard term='Monthly' price={49.99} description='Perfect for newcomers who want to get started with AI-powered trading.' features={['Real time, non repainting buy & sell chart signals', 'Customizable phone & desktop notifications', 'Automatic support & resistance trendlines', 'Automatic stop loss & take profit levels', '24/7 Customer support']} store='https://whop.com/precisionalgo/' />

                <div className='hidden 2xl:block bg-border-1 w-[1px] h-44 flex-shrink-0' />

                <PriceCard term='Quarterly' price={134.99} discount={0.1} description='Ideal for intermediate traders looking to enhance their strategies with advanced tools.' features={['Real time, non repainting buy & sell chart signals', 'Customizable phone & desktop notifications', 'Automatic support & resistance trendlines', 'Automatic stop loss & take profit levels', '24/7 Customer support']} store='https://whop.com/precisionalgo/?plan=plan_AzQBm8tIVdv8Q' />

                <div className='hidden 2xl:block bg-border-1 w-[1px] h-44 flex-shrink-0' />

                <PriceCard term='Yearly' price={499.99} description='Designed for professional traders who demand the best.' features={['Real time, non repainting buy & sell chart signals', 'Customizable phone & desktop notifications', 'Automatic support & resistance trendlines', 'Automatic stop loss & take profit levels', '24/7 Customer support']} store='https://whop.com/precisionalgo/?plan=plan_XNS7DLhcRNOmf' />
            </div>
        </motion.div>
    );
}

export { Pricing };
