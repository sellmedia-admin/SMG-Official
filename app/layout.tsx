import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Footer, Navbar } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMG website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NextTopLoader />
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
