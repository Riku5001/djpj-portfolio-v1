'use client';

import { Stack, Typography } from "@mui/material";

import NavMenu from "../components/NavMenu";

export default function Header() {
    return (
      <Stack
        direction="column"
        alignItems="center"
        width='100%'
        p="1rem"
        my="1rem"
        spacing={2}
      >
        <Typography component="h1" variant="h3" sx={{
          alignSelf: "center" 
        }}>
          {`<DJPJ>`}
        </Typography>
        <Typography component="h2" variant="h6" fontWeight="300" sx={{
          alignSelf: "center" 
        }}>
          Développeur Web full-stack
        </Typography>
        <NavMenu />
      </Stack>
    );
}