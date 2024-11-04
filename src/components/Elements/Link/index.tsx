import NextLink from 'next/link';

const Link: React.FC<React.ComponentProps<typeof NextLink>> = ({ children, className, ...props }) => {
  const mergedClassName = `${className}`.trim();

  return (
    <NextLink {...props} className={mergedClassName}>
      {children}
    </NextLink>
  );
};

export default Link;
