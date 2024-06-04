import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./components/NavMenu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJPJ // Web Developer",
  description: "Dominique-Jérémy Piché-Joncas' development portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>{`<DJPJ>`}</h1>
          <NavMenu />
        </header>
        {children}
        <footer>
          <p>{`<DJPJ />`}</p>
        </footer>
      </body>
    </html>
  );
}
