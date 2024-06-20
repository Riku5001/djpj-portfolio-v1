'use client';

import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const notoSansMono = Noto_Sans_Mono({ weight: "700", subsets: ["latin"] });

let theme = createTheme({
  palette: {
    primary: {
      main: '#913930',
      contrastText: '#000000'
    },
    secondary: {
      main: '#308791',
      contrastText: '#FFFFFF'
    }
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

theme = responsiveFontSizes(theme);

export default theme;