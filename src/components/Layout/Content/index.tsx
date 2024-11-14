import { Box } from '@mui/material';

interface ContentLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, className }) => {
  const mergedClassName = `flex flex-col items-center justify-center px-10 py-5 my-10 ${className ? className : ''}`;
  return (
    <div className="relative">
      <Box className={mergedClassName}>{children}</Box>
    </div>
  );
};

export default ContentLayout;
