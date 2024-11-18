import { Box, Grid2 } from '@mui/material';

import MyPic from '@/assets/images/my-pic.webp';
import { Image, Text } from '@/components/Elements';
import { PersonalSummaryData } from '@/constants/data';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="relative pb-5 md:pb-20">
      <div className={"absolute min-w-full min-h-full bg-[url('/images/about-me-cover.webp')] bg-cover"}></div>
      <Box className="z-10 sticky px-5 md:px-10 lg:px-20 max-w-[1000px] m-auto">
        <Grid2
          container
          className="bg-secondary-2 border-b-2 border-r-2 border-l-2 border-secondary-0 rounded-b-3 md:rounded-b-15 p-5 md:p-10"
        >
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Text type="h6" className="font-extrabold">
              Hi, I&apos;m Nguyen
            </Text>
            <Text type="body2" className="text-justify font-medium">
              {PersonalSummaryData}
            </Text>
          </Grid2>
          <Grid2 size={{ xs: 0, md: 3 }} className="relative">
            <Image
              src={MyPic.src}
              alt="Nguyen"
              width={0}
              height={0}
              className="absolute left-center translate-x-center top-[-40px] w-[20vw]"
              priority
            />
          </Grid2>
        </Grid2>
      </Box>
    </section>
  );
};

export default AboutMe;
