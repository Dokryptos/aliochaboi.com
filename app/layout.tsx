import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layouts/navbar";
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
