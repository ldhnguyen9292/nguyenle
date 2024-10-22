import { Box } from '@mui/material';

import { Image } from '@/components/Elements';

interface NavLogoProps {
  isAbsolute?: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ isAbsolute = true }) => {
  return (
    <Box className={`relative mr-2 cursor-pointer z-10 ${isAbsolute ? 'w-33' : 'w-17'}`}>
      <Box className={`${isAbsolute ? 'absolute h-25 w-33' : 'w-17'}`}>
        <Image src="/images/logo.png" alt="Logo" fill priority={true} />
      </Box>
    </Box>
  );
};

export default NavLogo;
