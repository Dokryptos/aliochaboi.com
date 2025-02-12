import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layouts/navbar";
import { ViewModeProvider } from "@/context/ViewModeContext";
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <ViewModeProvider>
          <Navbar />
          {children}
          <SanityLive />
        </ViewModeProvider>
      </body>
    </html>
  );
}
