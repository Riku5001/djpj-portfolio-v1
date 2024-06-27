'use client';

import Image from 'next/image';

import narratorPic from '../assets/djpj_400x400.png'
import { Box, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useContext, useState } from 'react';
import { ColorModeContext } from '../utils/ColorModeContext';

const StyledNarrator = styled(Box)(() => ([
  {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    margin: '0 auto',
    maxWidth: '125px',
    width: '100%',
    aspectRatio: '2/3',
    zIndex: 1,
    cursor: 'pointer',
  },
  {
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      borderRadius: '5px',
      boxShadow: 'inset 10vw 10vw rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.5)',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d',
    },
    '&.flipped::after': {
      transform: 'rotateY(180deg)',
    },
    '&.flipped .inner': {
      transform: 'rotateY(180deg)',
    }
  }
]));

const StyledInner = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
}));

const StyledSide = styled(Box)(({theme}) => ([
  {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '2% 4%',
    border: '1px solid #999999',
    borderRadius: '5px',
    backfaceVisibility: 'hidden',
  },
  {
    '&.front': {
      color: `${theme.palette.primary.contrastText}`,
      backgroundColor: 'aliceblue',
    },
    '&.back': {
      backgroundColor: '#222222',
      transform: 'rotateY(180deg)',
      justifyContent: 'center',
    }
  }
]));

const StyledTopIdentifier = styled(Typography)(() => ({
  position: 'absolute',
  top: 0,
  left: '5%',
  color: '#000000',
}));

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
  clipPath: 'polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%)',
}));

const StyledBottomIdentifier = styled(Typography)(() => ({
  position: 'absolute',
  bottom: 0,
  right: '5%',
  transform: 'rotateZ(180deg)',
  color: '#000000',
}));

const StyledDiamond = styled(Box)(() => ([
  {
    position: 'relative',
    width: '75%',
    height: '50%',
    margin: 'auto',
  },
  {
    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      left: 0,
      width: '100%',
      height: '100%',
      clipPath: 'polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%)',
      backgroundColor: '#FFFFFF',
    },
    '&::before': {
      top: '-20%',
      zIndex: 1,
    },
    '&::after': {
      bottom: '-20%',
      zIndex: -1,
    }
  }
]));

const StyledDiamondInner = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  clipPath: 'polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%)',
  backgroundColor: '#308791',
}))

export default function NarratorCard() {
  const colorMode = useContext(ColorModeContext);
  const [isFront, setIsFront] = useState(true); 

  function handleClick() {
    setIsFront(prev => !prev);
    colorMode.toggleColorMode();
  }

  return (
    <StyledNarrator onClick={handleClick} className={!isFront ? 'flipped' : ''}>
      <StyledInner className='inner'>
        <StyledSide className='front'>
          <StyledTopIdentifier variant='button'>DJ</StyledTopIdentifier>
          <StyledPortrait>
            <StyledPortraitImage
              src={narratorPic}
              alt="A pixelated card portrait of me."
              width="100"
              height="100"
            />
          </StyledPortrait>
          <StyledBottomIdentifier variant='button'>DJ</StyledBottomIdentifier>
        </StyledSide>
        <StyledSide className='back'>
          <StyledDiamond>
            <StyledDiamondInner></StyledDiamondInner>
          </StyledDiamond>
        </StyledSide>
      </StyledInner>
    </StyledNarrator>
  );
}