import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Why Life's Better with a Dog",
  description:
    "Discover the emotional, physical, and mental benefits of having a loyal four-legged friend by your side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
