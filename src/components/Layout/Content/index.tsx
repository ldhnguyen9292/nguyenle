import { Grid2 } from '@mui/material';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="relative mt-10">
      <Grid2 container>
        <Grid2 size={2}></Grid2>
        <Grid2 size={10} className="p-5">
          {children}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ContentLayout;
