//import { useState } from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import "./globals.css";
import NavMenu from "./components/NavMenu";
import { Typography } from "@mui/material";

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
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h3">
              {`<DJPJ>`}
            </Typography>
            <Typography component="h2" variant="h4">
              Développeur Web full-stack
            </Typography>
            <NavMenu />
            {children}
            <footer>
              <p>{`</DJPJ>`}</p>
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
