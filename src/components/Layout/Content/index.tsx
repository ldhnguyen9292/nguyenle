import { Box } from '@mui/material';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="relative mt-10">
      <Box className="flex flex-col items-center justify-center px-10 py-5">{children}</Box>
    </div>
  );
};

export default ContentLayout;
