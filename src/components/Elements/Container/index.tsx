import { Container as MUIContainer } from '@mui/material';

interface ContainerProps extends React.ComponentProps<typeof MUIContainer> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  const mergedClassName = `max-w-296 z-10 sticky ${props.className ? props.className : ''}`.trim();
  return (
    <MUIContainer {...props} className={mergedClassName}>
      {children}
    </MUIContainer>
  );
};

export default Container;
