import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Box, List, ListItem, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import Boho from '@/assets/images/cybersoft.webp';
import { Button, Text } from '@/components/Elements';

interface ExperienceProps {
  rightId: string;
}

const Experience: React.FC<ExperienceProps> = ({ rightId }) => {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <Box className="absolute z-20 left-center translate-x-center pt-5 w-max ">
        <Box className="relative">
          <Text font="heading" className="uppercase font-bold text-x-large text-center">
            boho
          </Text>
          <Text className="text-base pl-64">Responsibilities</Text>
          <List sx={{ listStyleType: 'disc' }} className="text-large pl-64">
            {[
              'Write and manage API resources that can work across devices.',
              'Integrate VEND API to server.',
              'Manage the exchange of data and information.',
              'Build reusable code and libraries for future use.',
            ].map((text, index) => {
              return (
                <ListItem sx={{ display: 'list-item' }} key={index} className="font-body text-primary text-base">
                  {text}
                </ListItem>
              );
            })}
          </List>

          {/* See more */}
          <Button.SeeMoreButton onClick={() => {}} className="absolute right-0 bottom-[-50px]" />
        </Box>
      </Box>

      {/* Navigation */}
      <Box className="absolute z-20 bottom-[30px] left-[130px] bg-primary-0 rounded-full p-1">
        <Tabs
          value={currentPage}
          textColor="inherit"
          className="flex justify-between items-center w-max"
          sx={{
            '.MuiTabs-indicator': {
              display: 'none', // Ensures the indicator is hidden
            },
          }}
        >
          <Tab
            label="previous"
            icon={<ArrowCircleLeftOutlinedIcon />}
            onClick={onPrevious}
            disabled={currentPage <= 1}
            className="text-gray-300 min-w-10"
          />
          <Tab label={'airmason'} className="text-gray-300 text-large min-w-50 font-bold uppercase" />
          <Tab
            label="next"
            icon={<ArrowCircleRightOutlinedIcon />}
            onClick={onNext}
            disabled={currentPage >= totalPages}
            className="text-gray-200 min-w-10"
          />
        </Tabs>
      </Box>

      {/* Background */}
      <svg width="1200" height="500" viewBox="0 0 1800 800">
        <image href={Boho.src} clipPath={`url(#${rightId})`} className="w-full" />
      </svg>
    </>
  );
};

export default Experience;
