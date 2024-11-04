'use client';

import { AppBar, Box, Toolbar } from '@mui/material';

import { Container } from '@/components/Elements';
import DownloadCV from './DownloadCV';
import NavBar from './NavBar';
import NavLogo from './NavLogo';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-0">
      <AppBar position="static" color="transparent">
        <Container className="z-20 py-0 px-5">
          <Toolbar variant="dense">
            <Box className="flex">
              <NavLogo />
              <NavBar />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <DownloadCV />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
