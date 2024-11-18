import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, List, ListItem, Tab, Tabs } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ExperienceCover0 from '@/assets/images/experience-cover-0.webp';
import ExperienceCover1 from '@/assets/images/experience-cover-1.webp';
import ExperienceCover2 from '@/assets/images/experience-cover-2.webp';
import ExperienceCover3 from '@/assets/images/experience-cover-3.webp';
import ExperienceCover4 from '@/assets/images/experience-cover-4.webp';
import ExperienceCover5 from '@/assets/images/experience-cover-5.webp';
import ExperienceCover6 from '@/assets/images/experience-cover-6.webp';
import { Button, Text } from '@/components/Elements';
import { ExperienceData } from '@/constants/data';

interface ExperienceProps {
  rightId: string;
}

const Experience: React.FC<ExperienceProps> = ({ rightId }) => {
  const data = ExperienceData[1].projects;
  const totalPages = data.length;
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const ExperienceCover = [
    ExperienceCover0,
    ExperienceCover1,
    ExperienceCover2,
    ExperienceCover3,
    ExperienceCover4,
    ExperienceCover5,
    ExperienceCover6,
  ];

  const onNext = () => {
    setActiveTab((prev) => prev + 1);
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setIsAnimating(false); // Stop animation
    }, 1000); // Timeout should match the animation duration
  };

  const onPrevious = () => {
    setActiveTab((prev) => prev - 1);
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setIsAnimating(false); // Stop animation
    }, 1000); // Timeout should match the animation duration
  };

  const redirectToExperiencePage = (projectName: string) => {
    router.push(`/experience?project=${projectName}`);
  };

  return (
    <div className="w-full">
      {data.map(
        (item, index) =>
          index === activeTab && (
            <Box
              key={item.project}
              className={twMerge(
                'absolute z-20 left-center translate-x-center pt-5 w-inherit pr-5 pl-88',
                isAnimating ? 'animate-right-to-center' : ''
              )}
            >
              <Box className="relative">
                <Text type="h5" className="uppercase font-bold text-center !text-h5-lg">
                  {item.project}
                </Text>
                <Text type="h6" className="!text-h6-lg">
                  Responsibilities
                </Text>
                <List className="text-body1-lg line-clamp-6">
                  {item.responsibilities.map((text, index) => {
                    return (
                      <ListItem
                        sx={{ display: 'list-item' }}
                        key={index}
                        className="font-body text-primary leading-none text-body2-lg"
                      >
                        <PlayArrowIcon fontSize="small" /> {text}
                      </ListItem>
                    );
                  })}
                </List>

                {/* See more */}
                <Button.SeeMoreButton
                  onClick={() => redirectToExperiencePage(item.project)}
                  className="absolute right-0 bottom-[-50px]"
                />
              </Box>
            </Box>
          )
      )}

      {/* Navigation */}
      <Box className="absolute z-20 bottom-[30px] left-[130px] bg-primary-0 rounded-full p-1">
        <Tabs
          value={activeTab}
          textColor="inherit"
          className="flex justify-between items-center w-max"
          sx={{
            '.MuiTabs-indicator': {
              display: 'none', // Ensures the indicator is hidden
            },
          }}
        >
          <Tab
            icon={<ArrowCircleLeftOutlinedIcon />}
            onClick={onPrevious}
            disabled={activeTab < 1}
            className="text-gray-300 min-w-10"
          />
          <Tab label={data[activeTab].project} className="text-gray-300 text-large min-w-50 font-bold uppercase" />
          <Tab
            icon={<ArrowCircleRightOutlinedIcon />}
            onClick={onNext}
            disabled={activeTab > totalPages - 2}
            className="text-gray-200 min-w-10"
          />
        </Tabs>
      </Box>

      {/* Background */}
      <svg
        width="1200"
        height="500"
        viewBox="0 0 1800 800"
        className={twMerge('opacity-90', isAnimating ? 'animate-right-to-left' : '')}
      >
        <image href={ExperienceCover[activeTab].src} clipPath={`url(#${rightId})`} className="w-full" />
      </svg>
    </div>
  );
};

export default Experience;
