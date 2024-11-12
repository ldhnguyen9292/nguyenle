import { withProperties } from '@/utils/types';
import { twMerge } from 'tailwind-merge';
import SeeMoreButton from './SeeMoreButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const mergedClassName = twMerge(
    'text-secondary bg-primary-0 rounded-full border-solid border-4 border-gray-500 px-5 py-2 font-bold',
    `${className ? className : ''}`
  );
  return (
    <button {...props} className={mergedClassName}>
      {children}
    </button>
  );
};

export default withProperties(Button, {
  SeeMoreButton,
});
