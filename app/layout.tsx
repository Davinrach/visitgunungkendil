import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wisata Gunung Kendil",
    template: "%s | Wisata Gunung Kendil",
  },
  description: "Website informasi digital Wisata Gunung Kendil. Temukan keindahan alam, rute trekking, camping ground, dan informasi pariwisata lainnya.",
  openGraph: {
    title: "Wisata Gunung Kendil",
    description: "Website informasi digital Wisata Gunung Kendil. Temukan keindahan alam dan aktivitas seru lainnya.",
    url: "https://gunungkendil.com",
    siteName: "Wisata Gunung Kendil",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisata Gunung Kendil",
    description: "Website informasi digital Wisata Gunung Kendil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} font-body bg-background text-textPrimary relative min-h-screen`}
      >
        <div className="fixed inset-0 z-[-1] bg-pattern pointer-events-none"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
