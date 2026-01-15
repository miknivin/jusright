import { DM_Sans, Lora, Poppins } from "next/font/google";
import localFont from "next/font/local";

// Serif font - Lora (already good)
export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  style: ["normal"],
});

// Sans-serif - DM Sans (wide range of weights)
export const dmsans = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-dmsans",
});

// New: Poppins - modern, geometric, rounded sans-serif (very popular)
// Choose the weights you actually need to keep bundle size small
export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"], // ← pick what you use (most common combo)
  // weight: ["100","200","300","400","500","600","700","800","900"], // ← full range if needed
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",        // CSS variable name you'll use
  style: ["normal"],                 // add "italic" if you need italics later
});

// Local variable font - SUSE (already good)
export const suseSans = localFont({
  src: "./SUSE-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-suse",
});