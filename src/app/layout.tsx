import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { stackServerApp } from "@/auth/stack-auth";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tukod.ai - Building your business, one agent at a time.",
    description:
        "Tukod.ai is a platform for building your business, one agent at a time.",
    manifest: "/manifest.json",
    icons: {
        icon: "/new-favicon.png",
        shortcut: "/new-favicon.png",
        apple: "/new-favicon.png",
    },
    // viewport: {
    //   width: "device-width",
    //   initialScale: 1,
    //   maximumScale: 1,
    //   userScalable: false,
    //   viewportFit: "cover",
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head> */}
            <body
                className={cn(
                    `${geistSans.variable} ${geistMono.variable} antialiased`
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <Toaster />

                    <StackProvider app={stackServerApp}>
                        <StackTheme>{children}</StackTheme>
                    </StackProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
