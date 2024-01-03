import React from "react";
import { LoadingProvider, Providers, ToastProvider } from "@/providers";
import { Locale } from "@/root/i18n.config";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
    title: "Starter Project",
    description: ""
};

const Layout = ({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) => {
    return (
        <html lang={params.lang} className={`${poppins.variable}`}>
            <body>
                <Providers>
                    <LoadingProvider>
                        <ToastProvider>{children}</ToastProvider>
                    </LoadingProvider>
                </Providers>
            </body>
        </html>
    );
};

export default Layout;
