import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "test login..",
  description: "Generated by create next app",
};
import localFont from 'next/font/local'
const PelakFA = localFont({src: [
  {
    path:"../public/fonts/PelakFA-Thin.ttf",
    weight: "200",
    style:"normal"
  },
  {
    path:"../public/fonts/PelakFA-light.ttf",
    weight: "300",
    style:"normal"
  },
  {
    path:"../public/fonts/PelakFA-Regular.ttf",
    weight: "400",
    style:"normal"
  },
  {
    path:"../public/fonts/PelakFA-Medium.ttf",
    weight: "500",
    style:"normal"
  },
  {
    path:"../public/fonts/PelakFA-SemiBold.ttf",
    weight: "600",
    style:"normal"
  }, 
  {
    path:"../public/fonts/PelakFA-Bold.ttf",
    weight: "700",
    style:"normal"
  },
  {
    path:"../public/fonts/PelakFA-ExtraBold.ttf",
    weight: "800",
    style:"normal"
  },
  {
    path:"../public/fonts/PelakFA-Black.ttf",
    weight: "900",
    style:"normal"
  },
  
]})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa'dir="rtl">
      <body className={PelakFA.className} >
        {children}
      </body>
    </html>
  );
}
