// "use client" is REMOVED - this is now a Server Component
import Link from "next/link";
import Header5 from "@/components/header/Header5";
import Home3Footer from "@/components/Footer/Home3Footer";
import ServicesClient from "@/components/services/ServicesClient";
import Home5Footer from "@/components/Footer/Home5Footer";
export const metadata = {
  title:
    "Our Services | Custom Software, Workflows & Websites – JustRight Tech",
  description:
    "Tailored solutions built just right: custom ERP, e-commerce platforms, AI-powered automations, professional websites, workflow solutions, and startup packages — efficient, focused, and designed for your real business needs.",
  keywords:
    "custom software services, ERP development, e-commerce solutions, AI automation, custom websites, business startup packages, workflow solutions, Kerala IT services",
  openGraph: {
    title: "Our Services – JustRight Tech",
    description:
      "From custom ERP to AI automations and professional websites — we build exactly what your business needs, nothing more, nothing less.",
    url: "https://justrighttech.co/services",
    type: "website",
  },
  alternates: {
    canonical: "https://justrighttech.co/services",
  },
};
export default function ServicePage() {
  return (
    <>
      <Header5 />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>
                  Challenges <br /> We Solve Together
                </h1>
                <ul className="breadcrumb-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <svg
                      width={25}
                      height={6}
                      viewBox="0 0 25 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>
                    Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesClient />

      <Home5Footer />
    </>
  );
}
