// app/layout.tsx          → Server Component (only metadata + basic structure)

import ClientLayout from "@/components/layout/ClientLayout";
import { dmsans, suseSans, lora } from "@/fonts/font";
import { Analytics } from "@vercel/analytics/next";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/style.css";
export const metadata = {
  title: {
    default:
      "JustRight Tech | Tailored Software, Workflows & Websites Built Just Right",
    template: "%s | JustRight Tech",
  },
  description:
    "Custom software, smart workflows, professional websites, AI automations, and startup packages — all built exactly for your business. No bloat. Just what works.",
  keywords:
    "custom software, tailored ERP, e-commerce solutions, AI automations, custom websites, business startup packages, Kerala IT solutions",
  openGraph: {
    title: "JustRight Tech — Tailored Solutions Built Just Right",
    description:
      "We create custom software, workflows, and websites that fit your business perfectly — efficient, reliable, and designed for real growth.",
    url: "https://justrighttech.co",
    siteName: "JustRight Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustRight Tech | Custom Software Built Just Right",
    description:
      "Tailored software, workflows, websites, and automations — made exactly for your business.",
  },
  alternates: {
    canonical: "https://justrighttech.co",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* GSAP + plugins — loaded before interactive */}
        <script src="/assets/js/gsap.min.js" defer />
        <script src="/assets/js/ScrollTrigger.min.js" defer />
        <script src="/assets/js/SplitText.min.js" defer />
      </head>

      <body
        id="body"
        className={`tt-magic-cursor ${lora.variable} ${dmsans.variable} ${suseSans.variable}`}
        suppressHydrationWarning
      >
        <ClientLayout>
          <Analytics />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
