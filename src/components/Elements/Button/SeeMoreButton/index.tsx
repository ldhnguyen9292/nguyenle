import { Button } from '@mui/material';

const SeeMoreButton: React.FC<React.ComponentProps<typeof Button>> = ({ ...props }) => {
  const mergedClassName =
    `text-secondary bg-primary-0 w-[150px] h-[48px] rounded-full border-solid border-4 border-gray-500 font-bold ${
      props.className ? props.className : ''
    }`.trim();
  return (
    <Button {...props} className={mergedClassName}>
      See more
    </Button>
  );
};

export default SeeMoreButton;
