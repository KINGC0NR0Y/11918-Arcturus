import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { teamInfo } from "@/lib/data/social";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://arcturus11918.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARCTURUS #11918 | Tom Glenn High School Robotics",
    template: "%s | ARCTURUS #11918",
  },
  description:
    "ARCTURUS #11918 is a student robotics team from Tom Glenn High School in Texas focused on software, hardware, CAD, strategy, engineering, competition, and STEM outreach.",
  keywords: [
    "ARCTURUS",
    "11918",
    "Tom Glenn High School",
    "robotics team",
    "FTC",
    "student engineering",
    "Leander Texas robotics",
  ],
  authors: [{ name: "ARCTURUS #11918" }],
  openGraph: {
    title: "ARCTURUS #11918 | Tom Glenn High School Robotics",
    description:
      "A student-led engineering organization from Tom Glenn High School — software, hardware, CAD, strategy, and competition.",
    url: siteUrl,
    siteName: "ARCTURUS #11918",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCTURUS #11918 | Tom Glenn High School Robotics",
    description:
      "A student-led engineering organization from Tom Glenn High School — software, hardware, CAD, strategy, and competition.",
    creator: teamInfo.x.handle,
  },
  icons: {
    icon: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARCTURUS #11918",
  url: siteUrl,
  email: teamInfo.email,
  sameAs: [teamInfo.instagram.url, teamInfo.x.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: teamInfo.schoolAddressLine1,
    addressLocality: "Leander",
    addressRegion: "TX",
    postalCode: "78641",
    addressCountry: "US",
  },
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: teamInfo.school,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-sm focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <SiteBackground />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
