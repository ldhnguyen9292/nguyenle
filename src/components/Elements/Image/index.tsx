import NextImage from 'next/image';

import { withProperties } from '@/utils/types';
import HomeImage from './HomeImage';

const Image: React.FC<React.ComponentProps<typeof NextImage>> = ({ src, alt, ...props }) => {
  return <NextImage src={src} alt={alt} {...props} />;
};

export default withProperties(Image, { HomeImage });
