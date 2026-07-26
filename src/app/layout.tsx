import type { Metadata } from "next";
import { Inter, Bebas_Neue, Montserrat, Poppins, Space_Grotesk, Outfit, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--font-poppins" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Premium Graphic Design Poster Studio",
  description: "Create your premium event poster instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${inter.variable} 
        ${bebas.variable} 
        ${montserrat.variable} 
        ${poppins.variable} 
        ${space.variable} 
        ${outfit.variable} 
        ${sora.variable} 
        antialiased bg-neutral-100 text-neutral-900
      `}>
        {children}
      </body>
    </html>
  );
}
