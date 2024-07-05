import { Box } from "@mui/material";

import narratorPic from './assets/me.png';
import profilePic from './assets/profile.png';

import Bubble from "./components/Bubble";
import NarratorCard from "./components/NarratorCard";
import NarratorThemeCard from "./components/NarratorThemeCard";
import ProjectCard from "./components/ProjectCard";
import { Stack } from "./utils/Project";

export default function Home() {
  const projects: Project[] = [{
    title: 'Semaine numériQC',
    identifier: 'SNQC',
    client: {
      name: 'Québec numérique',
      url: 'https://quebecnumerique.com'
    },
    image: narratorPic,
    skills: [
      {
        name: 'Javascript',
        stack: Stack.FRONTEND
      },
      {
        name: 'PHP',
        stack: Stack.BACKEND
      }
    ],
    description: "J'ai effectué une refonte complète du site Web"
  }];

  return (
    <Box m='0 auto' p="0.5rem" maxWidth="1200px">
      <Box display="flex" flexDirection="row" mb="2rem" gap='.5rem'>
        <Box flex="4" display='flex' flexDirection='column' gap='1rem'>
          <Bubble id="hello" title="Salut!" origin="right">
            J'aimerais me présenter: je m'appelle Dominique-Jérémy Piché-Joncas et je suis développeur depuis presque une décennie. J'ai créé une demi-douzaine de sites Web, en plus d'avoir effectué la maintenance pour plus d'une douzaine de sites.
            J'ai également développé deux jeux vidéo sur mobile, sans compter d'autres projets plus petit ou inachevés.
          </Bubble>
          <Bubble id="work" title="Mes projets" origin="right">
            Voici les projets sur lesquels j'ai travaillé jusqu'à présent :
          </Bubble>
          <ProjectCard project={projects[0]}>
          </ProjectCard>
          <Bubble id="skills" title="Mes compétences" origin="right">
            <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
          </Bubble>
          <Bubble id="education" title="Mes formations" origin="right">
            <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
          </Bubble>
          <Bubble id="website" title="Ce portfolio..." origin="right">
            ... a été entièrement conçu à l'aide du framework Next.js et de la librairie de composantes MUI.
          </Bubble>
        </Box>
        <Box flex="1" position="relative">
          <NarratorThemeCard image={narratorPic} identifier="DJ" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" mb="2rem">
        <Box flex="1" position="relative">
          <NarratorCard image={profilePic} identifier="VOUS" />
        </Box>
        <Box flex="4" mr="1rem">
          <Bubble id="contact" title="C'est votre tour!" origin="left">
            À vous de me parler de votre projet! Je suis disponible à l'embauche ou pour vous accompagner dans votre projet.
          </Bubble>
        </Box>
      </Box>
    </Box>
  );
}
