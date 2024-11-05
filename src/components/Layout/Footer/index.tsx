'use client';

import linkedin from '@/assets/images/linkedin.svg';
import topButton from '@/assets/images/top-button.png';
import { Image } from '@/components/Elements';

const SocialNetworkIcons = {
  linkedin: { src: linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/nguyen-le-5450b9239' },
};

const Footer: React.FC = () => {
  // On click to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Redirect to social networks
  const redirectToSocialNetwork = (url: string) => {
    window.open(url, '_blank');
  };

  // Redirect to home page
  const redirectToHomePage = () => {
    window.location.href = '/';
  };

  return (
    <footer className="relative flex flex-col">
      <div onClick={scrollToTop} role="button" tabIndex={0}>
        <Image
          src={topButton.src}
          alt="Top Button"
          width={160}
          height={188}
          priority={true}
          className="absolute top-0 left-20 cursor-pointer"
        />
      </div>
      <section className="bg-primary-2 min-w-full h-23.5 border-b-2 border-solid border-b-primary-0 flex align-center justify-around mr-5">
        <div></div>
        <div className="flex align-center justify-end m-2">
          {Object.entries(SocialNetworkIcons).map(([key, icon], index) => {
            return (
              <icon.src
                key={key + index}
                alt={icon.name}
                width={76}
                height={70}
                className="cursor-pointer fill-gray hover:fill-white"
                onClick={() => redirectToSocialNetwork(icon.url)}
              />
            );
          })}
        </div>
      </section>
      <section className="bg-primary-0 min-w-full h-35 flex align-center justify-center" onClick={redirectToHomePage}>
        <Image src="/images/logo.png" alt="Logo" width={200} height={140} priority={true} className="cursor-pointer" />
      </section>
    </footer>
  );
};

export default Footer;
