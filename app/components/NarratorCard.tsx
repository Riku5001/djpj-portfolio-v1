import Image from 'next/image';
import { Noto_Sans_Mono } from 'next/font/google';

import narratorPic from '../assets/djpj_400x400.png'
import classes from './NarratorCard.module.css';

const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"], weight: "700" });

export default function NarratorCard() {
  return (
    <div className={classes.narrator}>
      <div className={classes.narratorInner}>
        <div className={classes.front}>
          <p className={`${classes.topIdentifier} ${notoSansMono.className}`}>DJ</p>
          <div className={classes.portrait}>
            <Image
              src={narratorPic}
              alt="A pixelated card portrait of me."
              width="200"
              height="200"
            />
          </div>
          <p className={`${classes.bottomIdentifier} ${notoSansMono.className}`}>DJ</p>
        </div>
        <div className={classes.back}>
          <div className={classes.topMiniDiamond}></div>
          <div className={classes.diamond}>
            <div className={classes.diamondInner}></div>
          </div>
          <div className={classes.bottomIdentifier}></div>
        </div>
      </div>
    </div>
  );
}