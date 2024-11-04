import NextLink from 'next/link';

import { Link, Text } from '@/components/Elements';

interface NavLinkProps extends React.ComponentProps<typeof NextLink> {
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, isActive, ...props }) => {
  const className = `bg-none px-2 py-1 pointer ${isActive ? 'bg-secondary-1 rounded-3' : ''}`.trim();

  return (
    <Link className={className} {...props}>
      <Text color={isActive ? 'primary' : 'secondary'} className="text-sm font-bold">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
