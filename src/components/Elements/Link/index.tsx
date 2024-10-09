import NextLink from 'next/link';
import { ComponentProps } from 'react';

const Link: React.FC<ComponentProps<typeof NextLink>> = ({ children, className, ...props }) => {
  const mergedClassName = `${className}`.trim();

  return (
    <NextLink {...props} className={mergedClassName}>
      {children}
    </NextLink>
  );
};

export default Link;
