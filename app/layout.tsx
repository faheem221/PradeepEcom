import type { Metadata } from "next";
import "./globals.css";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";
import ReactLenis from "lenis/react";
import { Providers } from "./Provider";
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
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&f[]=satoshi@300,301,400,401,500,501,700,701,900&f[]=work-sans@100,101,200,201,300,301,400,401,500,501,600,601,700,701,800,801,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
     
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
      
      </body>
    </html>
  );
}
