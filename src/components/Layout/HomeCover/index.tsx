'use client';

import { Box, Grid2 } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import HomeCover3 from '@/assets/images/home-cover-3.webp';
import HomeCover4 from '@/assets/images/home-cover-4.webp';
import HomeCover5 from '@/assets/images/home-cover-5.webp';
import { Image, Text } from '@/components/Elements';
import { globalEnv } from '@/config/globalEnv';
import LeftShape from './LeftShape';
import RightShape from './RightShape';

interface HomeCoverProps {
  leftId: string;
  rightId: string;
  topTitle: string;
  topIndex: string;
  childrenTop: React.ReactNode;
  childrenBottom: React.ReactNode;
}

const HomeCover: React.FC<HomeCoverProps> = ({ leftId, rightId, topTitle, topIndex, childrenTop, childrenBottom }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const homeCoverRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const defaultWidth = globalEnv.DEFAULT_WIDTH;
  const defaultHeight = globalEnv.DEFAULT_HEIGHT;

  // Scale this section to fit the screen
  useEffect(() => {
    const resizeHandler = () => {
      const layoutRef = homeCoverRef.current;
      const clientWidth =
        document.documentElement.clientWidth > defaultWidth ? defaultWidth : document.documentElement.clientWidth;

      if (layoutRef) {
        const scale = clientWidth / defaultWidth;
        layoutRef.style.transform = `scale(${scale})`;
        layoutRef.style.transformOrigin = 'top left';

        const sectionRef = ref.current;

        if (sectionRef) {
          sectionRef.style.height = `${defaultHeight * scale}px`;
        }
      }
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [ref.current?.clientWidth, defaultWidth, defaultHeight]);

  // When scrolling to the ref, the animation should be start
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold for when to start the animation
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="w-full">
      <Box className="w-360 h-328.5">
        <Box ref={homeCoverRef} className="w-full h-full relative">
          <Image src={HomeCover3.src} alt="Home Cover 3" className="absolute z-0" fill priority />
          <Image
            src={HomeCover4.src}
            alt="Home Cover 4"
            className="absolute right-0 top-[-200px] z-0"
            width={0}
            height={0}
            priority
            style={{ width: '514px', height: '728px' }}
          />
          <Image
            src={HomeCover5.src}
            alt="Home Cover 5"
            className="absolute right-0 top-[-240px] z-0"
            width={0}
            height={0}
            priority
            style={{ width: '514px', height: '610px' }}
          />

          <div className="h-full z-10 p-0">
            <Grid2 container className="pt-[140px]" spacing={50}>
              <Grid2 ref={topRef} container size={12} className="h-125" spacing={0}>
                <LeftShape id={leftId} className={isAnimating ? 'animate-left-to-right' : ''}>
                  <Text.HomeTitle text={topTitle} index={topIndex} />
                </LeftShape>
                <RightShape id={rightId} className={isAnimating ? 'animate-right-to-left' : ''}>
                  {childrenTop}
                </RightShape>
              </Grid2>
              <Grid2 container size={12} className="h-125" spacing={0}>
                <Grid2 size={1} />
                <Grid2 size={10}>{childrenBottom}</Grid2>
              </Grid2>
            </Grid2>
          </div>
        </Box>
      </Box>{' '}
    </section>
  );
};

export default HomeCover;
