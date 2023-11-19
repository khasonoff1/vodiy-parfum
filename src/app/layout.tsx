import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import logo from "@/assets/logo.png";

import "./globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Vodiy Parfum",
    description: "Make by khasonoff1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <div>{children}</div>
            </body>
        </html>
    );
}
