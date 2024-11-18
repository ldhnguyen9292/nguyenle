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
      <div onClick={scrollToTop}>
        <div className="w-[10vw] h-[12vw] max-w-[100px] max-h[117px] absolute top-0 left-5 md:left-10 lg:left-20 cursor-pointer bg-top-white hover:bg-top-black bg-contain bg-no-repeat" />
      </div>
      <section className="bg-primary-2 min-w-full border-b-2 border-solid border-b-primary-0 flex align-center justify-around mr-5">
        <div></div>
        <div className="flex align-center justify-end m-2 gap-5">
          {Object.entries(SocialNetworks).map(([key, icon], index) => {
            return (
              <div key={key + index} className="w-[10vw] h-[10vw] max-w-[76px] max-h-[76px]">
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
      <section className="bg-primary-0 min-w-full flex align-center justify-center" onClick={redirectToHomePage}>
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={200}
          height={124}
          priority={true}
          className="w-[20vw] h-[12vw] max-w-[200px] max-h-[124px] cursor-pointer"
        />
      </section>
    </footer>
  );
};

export default Footer;
