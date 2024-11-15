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
      <Typography {...props} className={`${baseClassName} text-h6-sm md:text-h6-md lg:text-h6-lg`}>
        {text}
      </Typography>
      <Typography {...props} className={`${baseClassName} text-h5-sm md:text-h5-md lg:text-h5-lg`}>
        {index}
      </Typography>
    </>
  );
};

export default HomeTitle;
