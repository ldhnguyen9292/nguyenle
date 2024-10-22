import linkedin from '@/assets/images/linkedin.png';
import topButton from '@/assets/images/top-button.png';
import { Image } from '@/components/Elements';

const SocialNetworks = {
  linkedin: { src: linkedin.src, name: 'LinkedIn' },
};

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col">
      <Image
        src={topButton.src}
        alt="Top Button"
        width={160}
        height={188}
        priority={true}
        className="absolute top-0 left-20 cursor-pointer"
      />
      <section className="bg-primary-2 min-w-full h-23.5 border-b-2 border-solid border-b-primary-0 flex align-center justify-around mr-5">
        <div></div>
        <div className="flex align-center justify-end m-2">
          {Object.entries(SocialNetworks).map(([key, value], index) => {
            return (
              <Image
                key={key + index}
                src={value.src}
                alt={value.name}
                width={76}
                height={70}
                className="cursor-pointer"
              />
            );
          })}
        </div>
      </section>
      <section className="bg-primary-0 min-w-full h-35 flex align-center justify-center">
        <Image src="/images/logo.png" alt="Logo" width={200} height={140} priority={true} className="cursor-pointer" />
      </section>
    </footer>
  );
};

export default Footer;
