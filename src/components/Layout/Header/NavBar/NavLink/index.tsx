import NextLink from 'next/link';
import { ComponentProps } from 'react';

import { Link, Text } from '@/components/Elements';

interface NavLinkProps extends ComponentProps<typeof NextLink> {
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, isActive, ...props }) => {
  const className = `bg-none px-2 py-1 pointer ${isActive ? 'bg-secondary-1 rounded-full' : ''}`.trim();

  return (
    <Link className={className} {...props}>
      <Text color={isActive ? 'primary' : 'secondary'} className="text-sm font-bold">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
