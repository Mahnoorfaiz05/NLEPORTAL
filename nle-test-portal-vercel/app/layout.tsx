import type { Metadata } from "next";
import "./globals.css";

const origin = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "NLE Test Preparation Portal | Dr. Muhammad Waleed Saif",
  description: "1,790 NLE MCQs across 9 medical systems and 8 basic subjects with instant feedback, saved results and teacher monitoring.",
  openGraph: {
    title: "NLE Test Preparation Portal",
    description: "1,790 MCQs · 9 Systems · 8 Basic Subjects · Dr. Muhammad Waleed Saif, MBBS.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NLE Test Preparation Portal",
    description: "1,790 MCQs · 9 Systems · 8 Basic Subjects · Dr. Muhammad Waleed Saif, MBBS.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
