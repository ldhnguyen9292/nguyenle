'use client';

import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

interface LoaderProps {
  size?: number;
  children?: React.ReactNode;
}

const LoaderProvider: React.FC<LoaderProps> = ({ size = 100, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when page is fully loaded
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Clean up event listener on component unmount
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#000', // Optional: Slight transparency
            zIndex: 9999,
          }}
        >
          <CircularProgress size={size} sx={{ color: 'white' }} />
          <Box sx={{ width: 10 }} />
          <Typography variant="h2" color="white">
            Loading...
          </Typography>
        </Box>
      )}
      {!isLoading && children}
    </>
  );
};

export default LoaderProvider;
