import { withProperties } from '@/utils/types';
import SeeMoreButton from './SeeMoreButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const mergedClassName =
    `text-secondary bg-primary-0 rounded-full border-solid border-4 border-gray-500 px-5 py-2 font-bold text-body1-sm md:text-body1-md lg:text-body1-lg ${
      className ? className : ''
    }`.trim();

  return (
    <button {...props} className={mergedClassName}>
      {children}
    </button>
  );
};

export default withProperties(Button, {
  SeeMoreButton,
});
