import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Shaunak Joshi — Software Engineer",
  description:
    "Software Engineer at Hewlett Packard Enterprise. Specializing in DevSecOps, Kubernetes, cloud infrastructure, and distributed systems.",
  keywords: [
    "Shaunak Joshi",
    "Software Engineer",
    "DevSecOps",
    "Kubernetes",
    "Cloud Infrastructure",
    "HPE",
    "Texas A&M",
  ],
  openGraph: {
    title: "Shaunak Joshi — Software Engineer",
    description:
      "Software Engineer at HPE. DevSecOps, Kubernetes, cloud infrastructure, and distributed systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
