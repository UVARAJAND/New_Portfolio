import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uvarajan D | Backend Developer Portfolio",
  description: "Backend developer portfolio showcasing scalable APIs, system design, and AI-integrated engineering projects.",
  icons: {
    icon: '/u_logo.jpeg',
  },
  verification: {
    google: "W7b1naU2oIvEukVxmm_lY8kwc-3gfvk8r86DjF8mgtU",
    },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Uvarajan D",
  "url": "https://uvarajan-d.vercel.app",
  "jobTitle": "Backend Developer",
  "email": "uvarajandev@gmail.com",
  "sameAs": [
    "https://github.com/UVARAJAND",
    "https://www.linkedin.com/in/uvarajan-dev/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen overflow-x-hidden flex flex-col font-inter text-body bg-[#0A0A0F] bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.1),_transparent_40%),_radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.05),_transparent_50%)] text-body-text">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}