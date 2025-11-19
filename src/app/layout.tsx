// src/app/layout.tsx

import type { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import { siteConfig } from "@/lib/config/site.config";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import ClickEffect from "@/components/ClickEffect";

// Configure Fira Sans (main text) and Fira Code (mono/code)
const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fira-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

//Add SEO metadata
export const metadata: Metadata = {
  title: siteConfig.profile.metaTitle,
  description: siteConfig.profile.about,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaSans.variable} ${firaCode.variable} antialiased`}>
        <div className="w-[95%] max-w-5xl mx-auto " suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClickEffect />
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
