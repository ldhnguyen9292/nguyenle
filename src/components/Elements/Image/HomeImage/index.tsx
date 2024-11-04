import NextImage from 'next/image';

const HomeImage: React.FC<React.ComponentProps<typeof NextImage>> = ({ src, alt, ...props }) => {
  const mergedClassName = `${props.className ? props.className : ''} absolute max-w-max left-[-75px]`.trim();
  return (
    <NextImage
      {...props}
      src={src}
      alt={alt}
      width={0}
      height={0}
      style={{ width: '1440px', height: '510px' }}
      className={mergedClassName}
    />
  );
};

export default HomeImage;
