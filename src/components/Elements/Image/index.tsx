import NextImage from 'next/image';
import { ComponentProps } from 'react';

const Image: React.FC<ComponentProps<typeof NextImage>> = ({ src, alt, ...props }) => {
  return <NextImage src={src} alt={alt} {...props} />;
};

export default Image;
