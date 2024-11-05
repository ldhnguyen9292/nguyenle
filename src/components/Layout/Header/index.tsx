'use client';

import { AppBar, Box, Toolbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { Container } from '@/components/Elements';
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
        className={`bg-primary-0 max-w-360 ${isFixed ? 'left-center translate-x-center' : ''}`}
      >
        <Container className="z-20 py-0 px-5">
          <Toolbar variant="dense">
            <Box className="flex">
              <NavLogo isFixed={isFixed} />
              <NavBar />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <DownloadCV />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default Header;
