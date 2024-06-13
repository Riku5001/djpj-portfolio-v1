import { useState } from "react";
import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";

import "./globals.css";

// TODO : create a utility function that exports a font, imports it, and applies its className where needed
export const notoSans = Noto_Sans({ subsets: ["latin"] });
export const notoSansMono = Noto_Sans_Mono({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJPJ // Web Developer",
  description: "Dominique-Jérémy Piché-Joncas' development portfolio website.",
};

const THEMES = {
  light: "light",
  dark: "dark"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState(THEMES.light);

  function handleChangeTheme() {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        {children}
        <footer>
          <p className={notoSansMono.className}>{`</DJPJ>`}</p>
        </footer>
      </body>
    </html>
  );
}
