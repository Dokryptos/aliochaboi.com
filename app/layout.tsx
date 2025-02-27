import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layouts/navbar";
import { ViewModeProvider } from "@/context/ViewModeContext";
import localFont from "next/font/local";

type Props = {
  children: ReactNode;
};

const neueHaasGrotesk = localFont({
  src: [
    {
      path: "../fonts/Neue_Haas_Grotesk-Text_unobfuscated.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Neue_Haas_Grotesk-Text_Italic_unobfuscated.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-neueHaal",
});

const ppeikoThin = localFont({
  src: [
    {
      path: "../fonts/PPEiko-Thin.otf",
      weight: "300",
      style: "thin",
    },
  ],
  variable: "--font-ppeiko",
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${neueHaasGrotesk.variable} ${ppeikoThin.variable} h-full font-sans text-black anthialiased`}
      >
        <ViewModeProvider>
          <Navbar />
          {children}
          <SanityLive />
        </ViewModeProvider>
      </body>
    </html>
  );
}
