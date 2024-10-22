import { Container as MUIContainer } from '@mui/material';

interface ContainerProps extends React.ComponentProps<typeof MUIContainer> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <MUIContainer className="max-w-296" {...props}>
      {children}
    </MUIContainer>
  );
};

export default Container;