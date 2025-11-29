import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";

const geistSans = Geist({
    // variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
});

const geistMono = Geist_Mono({
    // variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
});

const sourceSerif4 = Source_Serif_4({
    // variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
    title: "BT Logistics Solutions",
    description: "Delivering excellence across the globe with innovative logistics solutions. Air freight, ocean freight, ground transport, and warehousing services.",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.className} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
