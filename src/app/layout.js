import { Prompt } from 'next/font/google'; 
import './globals.css';
import { Aside } from '@/components/Aside';

export const metadata = {
  title: "Code connect",
  description: "Uma rede social para devs!",
};

const prompt =  Prompt({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
