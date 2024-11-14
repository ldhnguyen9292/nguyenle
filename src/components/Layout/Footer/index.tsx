'use client';

import { useRouter } from 'next/navigation';

import { Image } from '@/components/Elements';
import { SocialNetworks } from '@/constants/data';

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
        <div className="flex align-center justify-end m-2 gap-5">
          {Object.entries(SocialNetworks).map(([key, icon], index) => {
            return (
              <div key={key + index} className="w-[76px] h-[76px]">
                <icon.src
                  className="w-full h-full cursor-pointer fill-gray hover:fill-white"
                  preserveAspectRatio="none"
                  onClick={() => redirectToSocialNetwork(icon.url)}
                />
              </div>
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
