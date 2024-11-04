import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Grid2 } from '@mui/material';

import Cycbersoft from '@/assets/images/cycbersoft.png';
import HomeCoverBlack from '@/assets/images/home-cover-2-black.png';
import { Button, Image, Text } from '@/components/Elements';

const EducationBackground: React.FC = () => {
  return (
    <Grid2 container className="w-full">
      <Grid2 size={3}>
        <Text.HomeTitle text="Education Background" index="03" />
      </Grid2>
      <Grid2 size={9} className="relative h-full">
        <Image.HomeImage src={Cycbersoft.src} alt="Cycbersoft" />
        <Image
          src={HomeCoverBlack.src}
          alt="Home cover black"
          width={0}
          height={0}
          style={{ width: '1440px', height: '320px' }}
          className="absolute opacity-50 max-w-max left-[-109px] bottom-[-53px] z-0"
        />

        {/* Navigation */}
        <Box className="flex flex-col h-full pb-16">
          <Box className="flex-grow"></Box>
          <Box className="flex justify-between items-center">
            <KeyboardArrowLeftIcon className="text-tertiary hover:text-fourth text-4x-large z-20" />
            <Box className="flex flex-col z-20">
              <Text font="heading" className="uppercase text-tertiary text-x-large font-x-bold">
                Cycbersoft
              </Text>
              <Text font="body" className="text-tertiary text-large font-medium">
                Major: Full-stack web developer
              </Text>
            </Box>
            <Button.SeeMoreButton />
            <KeyboardArrowRightIcon className="text-tertiary hover:text-fourth text-4x-large z-20" />
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default EducationBackground;
