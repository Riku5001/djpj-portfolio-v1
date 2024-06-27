import { Box, Typography } from "@mui/material";

import NarratorCard from "./components/NarratorCard";
import Bubble from "./components/Bubble";

export default function Home() {
  return (
    <Box m='0 auto' p="1rem" maxWidth="1200px">
      <Box display="flex" flexDirection="row">
        <Box flex="4" mr="1rem">
          <Bubble id="work" title="Salut!" origin="right">
            Je m'appelle Dominique-Jérémy Piché-Joncas et je suis Développeur Web full-stack. Avec presque une décennie d'expérience en tant que développeur Web full-stack et ayant fait une incursion dans le développement de jeux vidéo en co-fondant mon propre studio, j'ai cumulé diverses expériences principalement en programmation, mais également en planification, en conception, en design d'interface et en gestion de projet.
          </Bubble>
          <Bubble id="work" title="Work" origin="right">
            <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
          </Bubble>
          <Bubble id="skills" title="Skills" origin="right">
            <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
          </Bubble>
          <Bubble id="website" title="Ce portfolio..." origin="right">
            ... a été entièrement conçu à l'aide du framework Next.js et de la librairie de composantes MUI.
          </Bubble>
        </Box>
        <Box flex="1" position="relative">
          <NarratorCard />
        </Box>
      </Box>
      <Box id="contact">
        <Typography component="h2" variant="h4">
          Work
        </Typography>
        <Typography component="p">
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
        </Typography>
      </Box>
    </Box>
  );
}
