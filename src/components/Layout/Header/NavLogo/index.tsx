import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import { Image } from '@/components/Elements';

interface NavLogoProps {
  isFixed?: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ isFixed }) => {
  const router = useRouter();

  // On click to redirect to home page
  const handleClick = () => {
    router.push('/');
  };

  return (
    <Box
      className={`relative mr-2 cursor-pointer transition-all duration-300 min-h-[48px] ${isFixed ? 'w-17' : 'w-33'}`}
      onClick={handleClick}
    >
      <Box className={`transition-all duration-300 ${isFixed ? 'w-17' : 'absolute h-20.5 w-33'}`}>
        <Image src="/images/logo.webp" alt="Logo" fill priority={true} />
      </Box>
    </Box>
  );
};

export default NavLogo;
