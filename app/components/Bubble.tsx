'use client';

import { Typography, Box } from '@mui/material';
import { styled } from "@mui/material/styles";

const speechTriangleWidth = 10;

const StyledOuter = styled(Box)(({theme}) => ([
  {
    position: 'relative',
    minWidth: '0',
    padding: '1rem',
    borderRadius: '15px',
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
    transition: 'background-color .5s'
  },
  {
    '&.left': {
      marginLeft: `calc(1px * sqrt((pow(${speechTriangleWidth}, 2)) + (pow(${speechTriangleWidth}, 2))))`,
      borderBottomLeftRadius: 0,
    },
    '&.left::before': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      borderTop: `${speechTriangleWidth}px solid transparent`,
      borderBottom: `${speechTriangleWidth}px solid transparent`,
      borderLeft: `${speechTriangleWidth}px solid`,
      borderLeftColor: `${theme.palette.primary.main}`,
      bottom: 0,
      left: `calc(-1px * sqrt((pow(${speechTriangleWidth}, 2)) + (pow(${speechTriangleWidth}, 2))) + 1px)`,
      transformOrigin: 'bottom left',
      transform: 'rotate(45deg)',
      transition: 'border-color .5s'
    },
    '&.right': {
      marginRight: `calc(1px * sqrt((pow(${speechTriangleWidth}, 2)) + (pow(${speechTriangleWidth}, 2))))`,
      width: `calc(100% - (1px * sqrt((pow(${speechTriangleWidth}, 2)) + (pow(${speechTriangleWidth}, 2)))))`,
      borderBottomRightRadius: 0,
    },
    '&.right::after': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      borderTop: `${speechTriangleWidth}px solid transparent`,
      borderBottom: `${speechTriangleWidth}px solid transparent`,
      borderRight: `${speechTriangleWidth}px solid`,
      borderRightColor: `${theme.palette.primary.main}`,
      bottom: 0,
      right: `calc(-1px * sqrt((pow(${speechTriangleWidth}, 2)) + (pow(${speechTriangleWidth}, 2))) + 1px)`,
      transformOrigin: 'bottom right',
      transform: 'rotate(-45deg)',
      transition: 'border-color .5s'
    }
  }
]));

type Origin = 'left' | 'right';

export default function Bubble({ id, title, origin, children }:
  { id: string, title: string, origin: Origin, children: any }) {
  return (
    <StyledOuter id={id} className={origin}>
      <Typography component="h2" variant="h4" sx={{
        mb: "1rem",
        wordBreak: 'break-all',
      }}>
        {title}
      </Typography>
      {children}
    </StyledOuter>
  );
}