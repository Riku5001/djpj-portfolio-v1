'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import theme from '../utils/theme';

export default function Bubble({ id, title, origin, children }: { id: string, title: string, origin: string, children: any }) {
  
  return (
    <Box id={id} className={origin} sx={[
      {
        position: 'relative',
        padding: '1rem',
        borderRadius: '15px',
        backgroundColor: 'secondary.main',
        my: theme.spacing(4)
      },
      {
        '&.left': {
          ml: 'calc(1px * sqrt((pow(20, 2)) + (pow(20, 2))))',
          width: 'calc(100% - (1px * sqrt((pow(20, 2)) + (pow(20, 2)))))',
          borderBottomLeftRadius: 0,
        },
        '&.left::before': {
          content: '""',
          position: 'absolute',
          width: 0,
          height: 0,
          borderTop: '20px solid transparent',
          borderBottom: '20px solid transparent',
          borderLeft: '20px solid',
          borderLeftColor: 'secondary.main',
          bottom: 0,
          left: 'calc(-1px * sqrt((pow(20, 2)) + (pow(20, 2))))',
          transformOrigin: 'bottom left',
          transform: 'rotate(45deg)'
        },
        '&.right': {
          mr: 'calc(1px * sqrt((pow(20, 2)) + (pow(20, 2))))',
          width: 'calc(100% - (1px * sqrt((pow(20, 2)) + (pow(20, 2)))))',
          borderBottomRightRadius: 0,
        },
        '&.right::after': {
          content: '""',
          position: 'absolute',
          width: 0,
          height: 0,
          borderTop: '20px solid transparent',
          borderBottom: '20px solid transparent',
          borderRight: '20px solid',
          borderRightColor: 'secondary.main',
          bottom: 0,
          right: 'calc(-1px * sqrt((pow(20, 2)) + (pow(20, 2))))',
          transformOrigin: 'bottom right',
          transform: 'rotate(-45deg)'
        }
      }
    ]}>
      <Typography component="h2" variant="h4" sx={{
        mb: "1rem"
      }}>
        {title}
      </Typography>
      <Typography component="p">
        {children}
      </Typography>
    </Box>
  );
}