import { Grid2 } from '@mui/material';

import MyPic from '@/assets/images/my-pic.png';
import { Container, Image, Text } from '@/components/Elements';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="relative h-160">
      <div className={"absolute min-w-full min-h-full bg-[url('/images/about-me-cover.jpeg')] bg-cover"}></div>
      <Container>
        <Grid2
          container
          className="bg-secondary-2 border-b-2 border-r-2 border-l-2 border-secondary-0 rounded-b-15 pt-10 pb-20 pl-10"
        >
          <Grid2 size={9}>
            <Text color="primary" font="heading" className="text-x-large font-extrabold">
              Hi, I&apos;m Nguyen
            </Text>
            <Text color="primary" font="body" className="text-large text-justify font-medium">
              I am a software engineer with 3 years of professional experience, especially in Node.js. While my
              background is in full-stack, I also have grown a deep passion in creating scalable, efficient backend
              systems. I own consistent motivation in self-learning so I thrive to learn new technologies, improve my
              ability to write clean as well as reliable code. I’m currently seeking a remote, hybrid, or local position
              near my area to contribute my skills and grow professionally.
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
      </Container>
    </section>
  );
};

export default AboutMe;
