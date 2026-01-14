import Home5AboutSection from "@/components/about/Home5AboutSection";
import Home5Banner from "@/components/banner/Home5Banner";
// import Home5BlogSection from "@/components/blog-section/Home5BlogSection";
import Home5FeatureSection from "@/components/feature-section/Home5FeatureSection";
import Home5Footer from "@/components/Footer/Home5Footer";
import Header5 from "@/components/header/Header5";
import ThemeAndLayoutWrapper from "@/components/layout/ThemeAndLayoutWrapper";
import Home5PartnerSection from "@/components/partner-sections/Home5PartnerSection";
import Home5ProcessSection from "@/components/process-sections/Home5ProcessSection";
import Home2ServiceSection from "@/components/service-section/Home2ServiceSection";
import Home4ServiceSection from "@/components/service-section/Home4ServiceSection";
import ContactModal from "@/components/shared/ContactModal";
// import Home5ServiceSection from "@/components/service-section/Home5ServiceSection";
import Home5TestimonialSection from "@/components/testimonial-section/Home5TestimonialSection";
export const metadata = {
  title:
    "JustRight Tech | Tailored Software, Workflows & Websites Built Just Right",
  description:
    "Custom software, smart workflows, professional websites, AI automations, and startup packages — all built exactly for your business. No bloat, no unnecessary features, just real results.",
  openGraph: {
    title: "JustRight Tech — Tailored Software Built Just Right",
    description:
      "We create custom solutions that fit your business perfectly — efficient, human, and designed to help you grow.",
    url: "https://justrighttech.co",
    siteName: "JustRight Tech",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://justrighttech.co",
  },
};
const ItConsultingPageLight = () => {
  
  return (
    <>
      <Header5 />
      <Home5Banner />
      <Home5FeatureSection />
      <Home4ServiceSection />
      {/* <Home5PartnerSection /> */}
      <Home5AboutSection />
      <Home5ProcessSection />
      <Home2ServiceSection />
      <Home5TestimonialSection />
      {/* <Home5BlogSection /> */}
      <Home5Footer />
    </>
  );
};

export default ItConsultingPageLight;
