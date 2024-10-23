import HomeCover1 from '@/assets/images/home-cover-1.png';
import HomeCover2 from '@/assets/images/home-cover-2.png';
import HomeCover3 from '@/assets/images/home-cover-3.png';
import HomeCover4 from '@/assets/images/home-cover-4.png';
import HomeCover5 from '@/assets/images/home-cover-5.png';
import { Container, Image } from '@/components/Elements';
import { Grid2 } from '@mui/material';

interface HomeCoverProps {
  childrenTopLeft: React.ReactNode;
  childrenTopRight: React.ReactNode;
  childrenBottomLeft: React.ReactNode;
  childrenBottomRight: React.ReactNode;
}

const HomeCover: React.FC<HomeCoverProps> = ({
  childrenTopLeft,
  childrenTopRight,
  childrenBottomLeft,
  childrenBottomRight,
}) => {
  return (
    <section className="h-330 relative">
      <Image src={HomeCover3.src} alt="Home Cover 3" className="absolute z-negative" fill />
      <Image
        src={HomeCover4.src}
        alt="Home Cover 4"
        className="absolute z-negative right-0 top-[-200px]"
        width={514}
        height={712}
      />
      <Image
        src={HomeCover5.src}
        alt="Home Cover 5"
        className="absolute z-negative right-0 top-[-240px]"
        width={514}
        height={712}
      />

      <Image
        src={HomeCover1.src}
        alt="Home Cover 1"
        className="absolute top-[140px] left-[-81px] h-137.5"
        width={592}
        height={548}
      />
      <Image
        src={HomeCover2.src}
        alt="Home Cover 2"
        className="absolute top-[140px] !left-[320px] h-137.5"
        width={1440}
        height={570}
      />

      <Container className="absolute h-full z-10 left-center translate-x-center p-0">
        <Grid2 container className="pt-[140px]" spacing={50}>
          <Grid2 container size={12} className="h-125" spacing={0}>
            <Grid2 size={3}>{childrenTopLeft}</Grid2>
            <Grid2 size={9}>{childrenTopRight}</Grid2>
          </Grid2>
          <Grid2 container size={12} className="h-125" spacing={0}>
            <Grid2 size={9}>{childrenBottomLeft}</Grid2>
            <Grid2 size={3}>{childrenBottomRight}</Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </section>
  );
};

export default HomeCover;
