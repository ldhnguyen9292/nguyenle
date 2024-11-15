import { Box, Grid2 } from '@mui/material';

import MyPic from '@/assets/images/my-pic.webp';
import { Image, Text } from '@/components/Elements';
import { PersonalSummaryData } from '@/constants/data';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="relative h-160">
      <div className={"absolute min-w-full min-h-full bg-[url('/images/about-me-cover.webp')] bg-cover"}></div>
      <Box className="z-10 sticky px-20">
        <Grid2
          container
          className="bg-secondary-2 border-b-2 border-r-2 border-l-2 border-secondary-0 rounded-b-15 pt-10 pb-20 pl-10"
        >
          <Grid2 size={9}>
            <Text type="h6" className="font-extrabold">
              Hi, I&apos;m Nguyen
            </Text>
            <Text type="body1" className="text-justify font-medium">
              {PersonalSummaryData}
            </Text>
          </Grid2>
          <Grid2 size={3} className="relative">
            <Image
              src={MyPic.src}
              alt="Nguyen"
              width={295}
              height={610}
              className="absolute left-center translate-x-center top-[-40px]"
            />
          </Grid2>
        </Grid2>
      </Box>
    </section>
  );
};

export default AboutMe;
