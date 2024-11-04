import { Typography } from '@mui/material';

interface HomeTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  index: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ text, index, ...props }) => {
  const baseClassName = `font-heading text-primary text-center font-bold ${
    props.className ? props.className : ''
  }`.trim();
  return (
    <>
      <Typography {...props} className={`${baseClassName} text-x-large`}>
        {text}
      </Typography>
      <Typography {...props} className={`${baseClassName} text-4x-large`}>
        {index}
      </Typography>
    </>
  );
};

export default HomeTitle;
