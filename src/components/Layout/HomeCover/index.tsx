import HomeCover1 from '@/assets/images/home-cover-1.png';
import HomeCover2 from '@/assets/images/home-cover-2.png';
import HomeCover3 from '@/assets/images/home-cover-3.png';
import HomeCover4 from '@/assets/images/home-cover-4.png';
import HomeCover5 from '@/assets/images/home-cover-5.png';
import { Container, Image } from '@/components/Elements';
import { Grid2 } from '@mui/material';

interface HomeCoverProps {
  childrenTop: React.ReactNode;
  childrenBottom: React.ReactNode;
}

const HomeCover: React.FC<HomeCoverProps> = ({ childrenTop, childrenBottom }) => {
  return (
    <section className="h-330 relative">
      <Image src={HomeCover3.src} alt="Home Cover 3" className="absolute" fill />
      <Image
        src={HomeCover4.src}
        alt="Home Cover 4"
        className="absolute  right-0 top-[-200px]"
        width={0}
        height={0}
        style={{ width: '514px', height: '712px' }}
      />
      <Image
        src={HomeCover5.src}
        alt="Home Cover 5"
        className="absolute right-0 top-[-240px]"
        width={0}
        height={0}
        style={{ width: '514px', height: '600px' }}
      />

      <Image
        src={HomeCover1.src}
        alt="Home Cover 1"
        className="absolute top-[140px] left-[-81px]"
        width={0}
        height={0}
        style={{ width: '592px', height: '550px' }}
      />
      <Image
        src={HomeCover2.src}
        alt="Home Cover 2"
        className="absolute top-[140px] !left-[320px]"
        width={0}
        height={0}
        style={{ width: '1440px', height: '550px' }}
      />

      <Container className="h-full z-10 p-0">
        <Grid2 container className="pt-[140px]" spacing={50}>
          <Grid2 container size={12} className="h-125" spacing={0}>
            {childrenTop}
          </Grid2>
          <Grid2 container size={12} className="h-125" spacing={0}>
            {childrenBottom}
          </Grid2>
        </Grid2>
      </Container>
    </section>
  );
};

export default HomeCover;
