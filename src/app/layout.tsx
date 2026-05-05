import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Imprimere Pack",
    template: "%s | Imprimere Pack",
  },
  description:
    "Premium packaging solutions that combine elegance, quality, and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg font-sans text-text antialiased">
        <CustomCursor />
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
