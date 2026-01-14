// components/layout/ClientLayout.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useWow } from "@/customHooks/useWow";
import useMagneticHover from "@/customHooks/useMagneticHover";
import useButtonHoverEffect from "@/customHooks/useButtonHoverEffect";

import SmoothPageScroll from "@/utils/SmoothPageScroll";
import ScrollCircleProgress from "@/utils/ScrollCircleProgess";
import AnimatedCursor from "react-animated-cursor";
import ThemeSwitch from "@/components/common/Theme";
import ThemeAndLayoutWrapper from "@/components/layout/ThemeAndLayoutWrapper";

import "react-modal-video/css/modal-video.css";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // All your client-side effects & hooks
  useMagneticHover();
  useWow();
  useButtonHoverEffect();

  useEffect(() => {
    // Bootstrap JS
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // Your confetti (if still needed globally)
    require("../../../public/assets/js/confetti.browser.min");
  }, []);

  return (
    <ThemeAndLayoutWrapper>
      <Toaster
        position="bottom-left" // ← Bottom-left placement
        reverseOrder={false}
        toastOptions={{
          duration: 4000, // Show for 4 seconds
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            padding: "16px 24px",
            fontFamily: "inherit",
            zIndex: 999999999,
          },
          success: {
            style: {
              background: "#10b981", // Green for success
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10b981",
            },
          },
          error: {
            style: {
              background: "#ef4444", // Red for error
              color: "#fff",
            },
          },
        }}
      />
      <SmoothPageScroll />
      {children}

      {/* Global interactive elements */}
      <AnimatedCursor
        innerSize={16}
        outerSize={16}
        color="88, 65, 216"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        outerStyle={{ zIndex: 999999 }}
        innerStyle={{ zIndex: 999999 }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <ScrollCircleProgress />
      <ThemeSwitch />
    </ThemeAndLayoutWrapper>
  );
}
