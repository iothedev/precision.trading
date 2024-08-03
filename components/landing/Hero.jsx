import { Button } from '@/components';

function Hero() {
    return (
        <div className='w-full max-w-screen-md mx-auto text-center mt-24 sm:mt-44 px-6'>
            <h1 className='text-3xl sm:text-6xl font-medium !leading-tight tracking-[-2px]'>Maximize profitability with AI-powered trading</h1>
            <p className='mt-2 text-sm sm:text-base font-light text-foreground-2'> Our cutting-edge, AI-powered trading indicator is designed to give you the edge in the market by delivering accurate and timely signals.</p>
            <div className='mt-8 flex gap-4 mx-auto w-fit'>
                <Button variant={1} href='https://whop.com/precisionalgo/' target='_blank'>
                    Get Access Now
                </Button>
                <Button variant={2} href='#pricing'>
                    Pricing
                </Button>
            </div>
        </div>
    );
}

export { Hero };
