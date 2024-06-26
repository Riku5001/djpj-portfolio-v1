'use client';

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./utils/theme";

import "./globals.css";
import { ColorModeContext } from "./utils/ColorModeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*export const metadata: Metadata = {
  title: "DJPJ // Web Developer",
  description: "Dominique-Jérémy Piché-Joncas' development portfolio website.",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);
  const theme = useMemo(() => {
      return createTheme(getDesignTokens(mode))
  }, [mode]);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
