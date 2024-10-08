import { Typography } from '@mui/material';
import { twMerge } from 'tailwind-merge';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  font?: 'heading' | 'body';
  color?: 'primary' | 'secondary' | 'tertiary';
}

const Text: React.FC<TextProps> = ({ children, font = 'body', color = 'primary', className, ...props }) => {
  const mergedTWClassName = twMerge(
    font === 'body' && 'font-body',
    font === 'heading' && 'font-heading',
    color === 'primary' && 'text-primary',
    color === 'secondary' && 'text-secondary',
    color === 'tertiary' && 'text-tertiary'
  );
  const mergedClassName = `${mergedTWClassName} ${className ? className : ''}`.trim();

  return (
    <Typography {...props} className={mergedClassName}>
      {children}
    </Typography>
  );
};

export default Text;
