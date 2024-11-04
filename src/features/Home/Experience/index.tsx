import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Box, Grid2, List, ListItem, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import Boho from '@/assets/images/boho.png';
import { Button, Image, Text } from '@/components/Elements';

const Experience: React.FC = () => {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <Grid2 container className="w-full">
      <Grid2 size={3}>
        <Text.HomeTitle text="Experience" index="02" />
      </Grid2>
      <Grid2 size={9} className="relative">
        <Image.HomeImage src={Boho.src} alt="boho" />

        <Box className="absolute z-20 left-center translate-x-center pt-5 w-max ">
          <Box className="relative">
            <Text font="heading" className="uppercase font-bold text-x-large pl-72">
              boho
            </Text>
            <List sx={{ listStyleType: 'disc' }} className="text-large pl-64">
              <Text className="text-base">Responsibilities</Text>
              {[
                'Write and manage API resources that can work across devices.',
                'Integrate VEND API to server.',
                'Manage the exchange of data and information.',
                'Build reusable code and libraries for future use.',
              ].map((text, index) => {
                return (
                  <ListItem sx={{ display: 'list-item' }} key={index}>
                    <Text className="text-base">{text}</Text>
                  </ListItem>
                );
              })}
            </List>

            {/* See more */}
            <Button.SeeMoreButton onClick={() => {}} className="absolute right-0 bottom-[-50px]" />
          </Box>
        </Box>

        {/* Navigation */}
        <Box className="absolute z-20 bottom-[-30px] left-[130px] bg-primary-0 rounded-full p-1">
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
              icon={<ArrowCircleLeftOutlinedIcon />}
              onClick={onPrevious}
              disabled={currentPage <= 1}
              className="text-gray-300 min-w-10"
            />
            <Tab label={'airmason'} className="text-gray-300 text-large min-w-50 font-bold uppercase" />
            <Tab
              icon={<ArrowCircleRightOutlinedIcon />}
              onClick={onNext}
              disabled={currentPage >= totalPages}
              className="text-gray-200 min-w-10 outline-none"
            />
          </Tabs>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Experience;
