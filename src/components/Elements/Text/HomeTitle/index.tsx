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
      <Typography {...props} className={`${baseClassName} text-h3-sm md:text-h3-md lg:text-h3-lg`}>
        {text}
      </Typography>
      <Typography {...props} className={`${baseClassName} text-h2-sm md:text-h2-md lg:text-h2-lg`}>
        {index}
      </Typography>
    </>
  );
};

export default HomeTitle;
