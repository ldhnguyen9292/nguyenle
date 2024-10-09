import { Stack } from '@mui/material';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants';
import NavLink from './NavLink';

const LINKS = [
  { title: 'Home', href: ROUTES.Home },
  { title: 'Experience', href: ROUTES.Experience },
  { title: 'Skills', href: ROUTES.Skills },
  { title: 'Education Background', href: ROUTES.EducationBackground },
  { title: 'Contact', href: ROUTES.Contact },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Stack component="nav" direction="row" alignItems="center" spacing={2}>
      {LINKS.map(({ title, href }) => (
        <NavLink key={title} href={href} isActive={pathname === href}>
          {title}
        </NavLink>
      ))}
    </Stack>
  );
};

export default NavBar;
