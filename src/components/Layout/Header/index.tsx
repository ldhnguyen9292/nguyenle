'use client';

import { AppBar, Box, Toolbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import DownloadCV from './DownloadCV';
import NavBar from './NavBar';
import NavLogo from './NavLogo';

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const scrollThreshold = 100;

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setIsFixed(scrollY > scrollThreshold);
  }, [scrollThreshold]);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <section>
      <AppBar
        position={`${isFixed ? 'fixed' : 'static'}`}
        className={`w-full ${isFixed ? 'max-w-360 left-center translate-x-center' : ''}`}
      >
        <Box className="z-20 py-0 px-5 bg-primary-0">
          <Toolbar variant="dense">
            <Box className="flex">
              <NavLogo isFixed={isFixed} />
              <NavBar />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box className="hidden lg:block">
              <DownloadCV />
            </Box>
            <Box>
              <NavBar isMobile={true} />
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </section>
  );
};

export default Header;
