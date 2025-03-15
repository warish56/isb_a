import type { Metadata } from "next";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/NavBar";
import localFont from 'next/font/local'
import "./globals.css";


// Font files can be colocated inside the app directory
const HeyWow = localFont({
  src: [
    {
      path: '../public/fonts/HeyWowExtraBold.ttf',
      weight: '900',
    },
    {
      path: '../public/fonts/HeyWowSemiBold.ttf',
      weight: '800',
    },
    {
      path: '../public/fonts/HeyWowBold.ttf',
      weight: '700',
    },
    {
      path: '../public/fonts/HeyWowHeavy.ttf',
      weight: '600',
    },
    {
      path: '../public/fonts/HeyWowMedium.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/HeyWowRegular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/HeyWowLight.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/HeyWowRegular.ttf',
      weight: '400',
    },
  ],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${HeyWow.className}`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
