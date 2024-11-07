import { Container as MUIContainer } from '@mui/material';

interface ContainerProps extends React.ComponentProps<typeof MUIContainer> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  const mergedClassName = `max-w-360 w-full mx-auto flex flex-col overflow-hidden bg-secondary-0 ${
    props.className ? props.className : ''
  }`.trim();
  return (
    <div {...props} className={mergedClassName}>
      {children}
    </div>
  );
};

export default Container;
