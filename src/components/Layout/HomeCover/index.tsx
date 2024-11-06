import { Grid2 } from '@mui/material';

import HomeCover3 from '@/assets/images/home-cover-3.png';
import HomeCover4 from '@/assets/images/home-cover-4.png';
import HomeCover5 from '@/assets/images/home-cover-5.png';
import { Image, Text } from '@/components/Elements';
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
  return (
    <section className="h-330 relative">
      <Image src={HomeCover3.src} alt="Home Cover 3" className="absolute" fill />
      <Image
        src={HomeCover4.src}
        alt="Home Cover 4"
        className="absolute right-0 top-[-200px]"
        width={0}
        height={0}
        priority
        style={{ width: '514px', height: '712px' }}
      />
      <Image
        src={HomeCover5.src}
        alt="Home Cover 5"
        className="absolute right-0 top-[-240px]"
        width={0}
        height={0}
        priority
        style={{ width: '514px', height: '600px' }}
      />

      <div className="h-full z-10 p-0">
        <Grid2 container className="pt-[140px]" spacing={50}>
          <Grid2 container size={12} className="h-125" spacing={0}>
            <LeftShape id={leftId}>
              <Text.HomeTitle text={topTitle} index={topIndex} />
            </LeftShape>
            <RightShape id={rightId}>{childrenTop}</RightShape>
          </Grid2>
          <Grid2 container size={12} className="h-125" spacing={0}>
            <Grid2 size={1} />
            <Grid2 size={10}>{childrenBottom}</Grid2>
          </Grid2>
        </Grid2>
      </div>
    </section>
  );
};

export default HomeCover;
