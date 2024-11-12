'use client';

import { useRouter } from 'next/navigation';

import linkedin from '@/assets/images/linkedin.svg';
import { Image } from '@/components/Elements';

const SocialNetworkIcons = {
  linkedin: { src: linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/nguyen-le-5450b9239' },
};

const Footer: React.FC = () => {
  const router = useRouter();

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
    router.push('/');
  };

  return (
    <footer className="relative flex flex-col">
      <div onClick={scrollToTop} role="button" tabIndex={0}>
        <div className="w-[100px] h-[117px] absolute top-0 left-20 cursor-pointer bg-top-white hover:bg-top-black bg-contain" />
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
      <section className="bg-primary-0 min-w-full h-31 flex align-center justify-center" onClick={redirectToHomePage}>
        <Image src="/images/logo.webp" alt="Logo" width={200} height={124} priority={true} className="cursor-pointer" />
      </section>
    </footer>
  );
};

export default Footer;
