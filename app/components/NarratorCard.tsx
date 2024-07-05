'use client';

import Image, { StaticImageData } from 'next/image';
import { styled } from "@mui/material/styles";

import Card from './Card';
import { Box } from '@mui/material';

const StyledPortrait = styled(Box)(() => ([
  {
    position: 'relative',
    zIndex: 1,
  },
  {
    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      left: 0,
      width: '100%',
      height: '100%',
      clipPath: 'polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%)',
      zIndex: -1,
      backgroundColor: '#913930',
    },
    '&::before': {
      top: '-15%',
    },
    '&::after': {
      bottom: '-10%',
    }
  }
]));

const StyledPortraitImage = styled(Image)(() => ({
  width: '100%',
  height: 'auto',
  clipPath: 'polygon(50% 0%, 100% 0%, 90% 50%, 50% 100%, 10% 50%, 10% 0%)',
}));

export default function NarratorCard({ image, identifier, handleClick }: { image: StaticImageData, identifier: string, handleClick?: () => void }) {
  return (
    <Card
      image={image}
      identifier={identifier}
      handleClick={handleClick}
    >
      <StyledPortrait>
        <StyledPortraitImage
          src={image}
          alt="A pixelated card portrait of me."
          width="100"
          height="100"
        />
      </StyledPortrait>
    </Card>
  );
}