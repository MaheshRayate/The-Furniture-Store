import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";

import "./globals.css";
import Providers from "./Providers";

const metadata: Metadata = {
  title: "Store Project",
  description: "Built using Nextjs tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
