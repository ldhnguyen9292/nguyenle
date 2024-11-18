import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/Elements';
import { ROUTES } from '@/constants';
import DownloadCV from '../DownloadCV';
import NavLink from './NavLink';

const LINKS = [
  { title: 'Home', href: ROUTES.Home },
  { title: 'Experience', href: ROUTES.Experience },
  { title: 'Skills', href: ROUTES.Skills },
  { title: 'Education Background', href: ROUTES.EducationBackground },
  { title: 'Contact', href: ROUTES.Contact },
];

interface NavBarProps {
  isMobile?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile = false }) => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isMobile) {
    return (
      <div className="block lg:hidden">
        <Button
          id="menu-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className=" border-none hover:scale-110"
        >
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ className: 'bg-primary-0' }}
        >
          {LINKS.map(({ title, href }) => (
            <MenuItem key={title} onClick={handleClose}>
              <NavLink key={title} href={href} isActive={pathname === href}>
                {title}
              </NavLink>
            </MenuItem>
          ))}
          <div className="my-5 flex items-center justify-center">
            <DownloadCV />
          </div>
        </Menu>
      </div>
    );
  } else {
    return (
      <Stack component="nav" direction="row" alignItems="center" spacing={2} className="hidden lg:flex">
        {LINKS.map(({ title, href }) => (
          <NavLink key={title} href={href} isActive={pathname === href}>
            {title}
          </NavLink>
        ))}
      </Stack>
    );
  }
};

export default NavBar;
