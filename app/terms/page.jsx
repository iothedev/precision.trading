'use client';

import { Header, Footer } from '@/components';

function Term({ title, children }) {
    return (
        <section>
            <h3 className='mb-4 text-lg sm:text-xl font-medium'>{title}</h3>
            <div className='space-y-4 text-xs sm:text-sm text-foreground-2'>{children}</div>
        </section>
    );
}

export default function Terms() {
    return (
        <>
            <Header />
            <main className='w-full max-w-screen-xl mx-auto mt-24 px-6'>
                <h1 className='mb-8 text-2xl sm:text-3xl font-medium'>Terms of Service</h1>
                <div className='space-y-8'>
                    <Term title='Acceptance of Terms'>By using Precision Trading&apos;s software, you agree to these terms, our Privacy Policy, and any additional guidelines or rules applicable to specific services. If you do not agree with any part of these terms, please do not use our software.</Term>
                    <Term title='Description of Services'>Precision Trading provides software solutions to help traders analyze the market technically. Our software is for educational purposes only and not investment advice.</Term>
                    <Term title='User Conduct'>
                        <p>You agree to use our software lawfully and not engage in activities that infringe upon or violate the rights of others. Prohibited actions include:</p>
                        <ul className='list-disc pl-6'>
                            <li>Using our software for illegal, fraudulent, or unauthorized purposes.</li>
                            <li>Transmitting harmful, threatening, abusive, harassing, defamatory, obscene, or objectionable content.</li>
                            <li>Attempting unauthorized access to our software, servers, or networks.</li>
                            <li>Uploading or distributing viruses, malware, or harmful software.</li>
                            <li>Using our software for financial advisory, trading, or investment recommendations.</li>
                        </ul>
                    </Term>
                    <Term title='No Financial Advice'>Precision Trading is not a registered financial advisor and does not provide financial, investment, or trading advice. Our software is for informational and educational purposes only. Any information, data, or analysis provided should not be considered professional financial advice. You are solely responsible for your financial decisions and should consult a qualified financial advisor before making any investment or trading decisions.</Term>
                </div>
            </main>
            <Footer />
        </>
    );
}
