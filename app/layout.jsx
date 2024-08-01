import { Work_Sans } from "next/font/google";
import "./globals.css";
import { theme } from '@/tailwind.config'; 
import clsx from 'clsx';

const work_Sans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: 'Precision Trading',
  description: 'Cutting-edge, AI-powered trading indicator designed to give you an edge in the market by delivering accurate and timely signals.',
  'theme-color': theme.extend.colors.accent[1]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(work_Sans.className, 'overflow-x-hidden')}>{children}</body>
    </html>
  );
}
