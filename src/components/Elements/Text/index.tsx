import { Typography } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { withProperties } from '@/utils/types';
import HomeTitle from './HomeTitle';

interface TextProps extends React.ComponentProps<typeof Typography> {
  children: React.ReactNode;
  type?: 'h5' | 'h6' | 'body1' | 'body2';
}

const Text: React.FC<TextProps> = ({ children, type, className, ...props }) => {
  const mergedTWClassName = twMerge(
    type === 'h5' && 'text-h5-sm md:text-h5-md lg:text-h5-lg font-heading',
    type === 'h6' && 'text-h6-sm md:text-h6-md lg:text-h6-lg font-heading',
    type === 'body1' && 'text-body1-sm md:text-body1-md lg:text-body1-lg font-body',
    type === 'body2' && 'text-body2-sm md:text-body2-md lg:text-body2-lg font-body'
  );
  const mergedClassName = `${mergedTWClassName} ${className ? className : ''}`.trim();

  return (
    <Typography {...props} className={mergedClassName}>
      {children}
    </Typography>
  );
};

export default withProperties(Text, { HomeTitle });
