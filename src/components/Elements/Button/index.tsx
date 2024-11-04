import { withProperties } from '@/utils/types';
import SeeMoreButton from './SeeMoreButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default withProperties(Button, {
  SeeMoreButton,
});
