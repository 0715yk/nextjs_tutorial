import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../public/fonts/GmarketSansTTFMedium.ttf' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>{children}</body>
    </html>
  );
}
