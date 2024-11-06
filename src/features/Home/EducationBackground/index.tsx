import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';

import Cybersoft from '@/assets/images/cybersoft.jpg';
import { Button, Text } from '@/components/Elements';

interface EducationBackgroundProps {
  rightId: string;
}

const EducationBackground: React.FC<EducationBackgroundProps> = ({ rightId }) => {
  return (
    <>
      <Box className="absolute w-full h-full left-[-3px] bottom-[-51%]">
        <svg viewBox="0 400 1650 800">
          <rect width="100%" height="100%" fill="#000" clipPath={`url(#${rightId})`} className="opacity-50" />
        </svg>
      </Box>

      {/* Navigation */}
      <Box className="absolute w-full h-full">
        <Box className="relative w-full h-full">
          <Box className="absolute w-full bottom-0 flex flex-col pb-16">
            <Box className="flex-grow"></Box>
            <Box className="flex justify-around items-center">
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
        </Box>
      </Box>

      {/* Background */}
      <svg width="1200" height="500" viewBox="0 0 1800 800">
        <image href={Cybersoft.src} clipPath={`url(#${rightId})`} className="w-full" />
      </svg>
    </>
  );
};

export default EducationBackground;
