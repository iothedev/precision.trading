'use client';

import {
    Header,
    Footer
} from '@/components';

import {
    Hero,
    Video,
    Statistics,
    TradeBetter,
    UniversalMarketCompatibility,
    Reviews,
    Faq,
    Pricing,
    Cta
} from '@/components/landing';

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
