import styles from "./page.module.css";

import Typography from '@mui/material/Typography';

import NarratorCard from "./components/NarratorCard";
import Bubble from "./components/Bubble";

export default function Home() {
  return (
    <main className={styles.main}>
      <NarratorCard />
      <Bubble id="work" title="Work" origin="left">
        <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
      </Bubble>
      <Bubble id="skills" title="Skills" origin="left">
        <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
      </Bubble>
      <section id="contact">
        <Typography component="h2" variant="h4">
          Work
        </Typography>
        <Typography component="p">
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Quisque laoreet vehicula tortor id gravida. Suspendisse quis rhoncus ex. Sed faucibus sem sed ultricies sollicitudin. Quisque tincidunt nulla et efficitur lacinia. Mauris volutpat, magna et dapibus egestas, erat velit sagittis nulla, eu gravida urna magna vitae odio.
        </Typography>
      </section>
    </main>
  );
}
