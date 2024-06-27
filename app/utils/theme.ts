'use client';

import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { PaletteMode } from "@mui/material";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const notoSansMono = Noto_Sans_Mono({ weight: "700", subsets: ["latin"] });

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? {
      primary: {
        main: '#308791',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#913930',
        contrastText: '#000000'
      }
    } : {
      // palette values for dark mode
      primary: {
        main: '#913930',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#308791',
        contrastText: '#FFFFFF'
      }
    })
  },
  typography: {
    fontFamily: notoSans.style.fontFamily,
    h2: {
      fontFamily: notoSansMono.style.fontFamily,
    },
    h3: {
      fontFamily: notoSansMono.style.fontFamily,
    },
    h4: {
      fontFamily: notoSansMono.style.fontFamily,
    },
    button: {
      fontFamily: notoSansMono.style.fontFamily
    }
  },
});