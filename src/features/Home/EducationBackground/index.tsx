import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';
import { useState } from 'react';

import Cybersoft from '@/assets/images/cybersoft.webp';
import PNT from '@/assets/images/dai-hoc-y-khoa-pham-ngoc-thach-diem-chuan1.webp';
import { Button, Text } from '@/components/Elements';
import { EducationBackgroundData } from '@/constants/data';
import { useRouter } from 'next/navigation';

interface EducationBackgroundProps {
  rightId: string;
}

const EducationBackground: React.FC<EducationBackgroundProps> = ({ rightId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const bgArray = [Cybersoft.src, PNT.src];

  const handleChange = () => {
    setActiveIndex(1 - activeIndex);
  };

  const redirectToEducationBackgroundPage = () => {
    router.push('/education-background');
  };

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
              <KeyboardArrowLeftIcon
                className="text-tertiary hover:text-fourth text-h5-lg z-20"
                onClick={handleChange}
              />

              {EducationBackgroundData.map(
                (item, index) =>
                  index === activeIndex && (
                    <Box key={item.school} className="flex flex-col z-20">
                      <Text type="h6" className="uppercase text-tertiary font-x-bold max-w-136 !text-h6-lg">
                        {item.school}
                      </Text>
                      <Text type="body1" className="text-tertiary font-medium !text-body1-lg">
                        Major: {item.degree}
                      </Text>
                    </Box>
                  )
              )}

              <Button.SeeMoreButton onClick={redirectToEducationBackgroundPage} />

              <KeyboardArrowRightIcon
                className="text-tertiary hover:text-fourth text-h5-lg z-20"
                onClick={handleChange}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Background */}
      <svg width="1200" height="500" viewBox="0 0 1800 800">
        <image href={bgArray[activeIndex]} clipPath={`url(#${rightId})`} className="w-full" />
      </svg>
    </>
  );
};

export default EducationBackground;
