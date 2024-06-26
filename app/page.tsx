import { Box, Typography } from "@mui/material";

import NarratorCard from "./components/NarratorCard";
import Bubble from "./components/Bubble";

export default function Home() {
  return (
    <Box display="flex" flexDirection="row" m='0 auto' p="1rem" maxWidth="1200px">
      <Box flex="4" mr="1rem">
        <Bubble id="work" title="Work" origin="right">
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
        </Bubble>
        <Bubble id="skills" title="Skills" origin="right">
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
        </Bubble>
        <Box id="contact">
          <Typography component="h2" variant="h4">
            Work
          </Typography>
          <Typography component="p">
            <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
          </Typography>
        </Box>
      </Box>
      <Box flex="1" position="relative">
        <NarratorCard />
      </Box>
    </Box>
  );
}
