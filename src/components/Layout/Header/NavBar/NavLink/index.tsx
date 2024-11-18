import NextLink from 'next/link';

import { Link, Text } from '@/components/Elements';

interface NavLinkProps extends React.ComponentProps<typeof NextLink> {
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, isActive, ...props }) => {
  const className = `w-full bg-none px-2 py-1 pointer text-center ${isActive ? 'bg-secondary-1 rounded-3' : ''}`.trim();

  return (
    <Link className={className} {...props}>
      <Text type="body2" className={`${isActive ? 'text-primary' : 'text-secondary'} font-bold`}>
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
