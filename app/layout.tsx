import type { Metadata } from "next";

import narratorPic from './assets/me.png';
import "./globals.css";
import MuiProvider from "./components/MuiProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "DJPJ // Web Developer",
  description: "Dominique-Jérémy Piché-Joncas' development portfolio website.",
  icons: narratorPic.src
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <Header />
          {children}
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
