import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { Box, Grid2, Rating, Tab, Tabs } from '@mui/material';
import { MouseEvent, useState } from 'react';

import { Button, Text } from '@/components/Elements';

const SkillsData = [
  {
    name: 'node.js',
    percentage: 90,
  },
  {
    name: 'typescript',
    percentage: 80,
  },
  {
    name: 'react.js',
    percentage: 50,
  },
  {
    name: 'next.js',
    percentage: 50,
  },
  {
    name: 'react.js',
    percentage: 50,
  },
  {
    name: 'next.js',
    percentage: 50,
  },
];

const Skills: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onChange = (value: MouseEvent<HTMLDivElement>) => {
    console.log(value);
    setCurrentPage(1);
  };

  return (
    <Grid2 container className="w-full">
      <Grid2 size={7} className="px-10 py-2">
        <Box className="flex flex-col capitalize justify-between items-center border-solid border-gray-300 border-2 rounded-2xl p-5">
          {SkillsData.map((skill, index) => {
            return (
              <Box key={index} className="flex justify-between items-center w-full">
                <Text className="text-large">{skill.name}</Text>
                <Rating
                  value={(skill.percentage / 100) * 5} // Set this value dynamically as needed
                  max={5} // Total number of stars
                  readOnly // Makes the component non-interactive if needed
                  className="text-x-large"
                  sx={{
                    '.MuiRating-iconFilled': {
                      color: '#00bfff', // Set the color for filled stars (light blue)
                    },
                    '.MuiRating-iconEmpty': {
                      color: '#d3d3d3', // Set the color for empty stars (light gray)
                    },
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Navigation */}
        <Box className="flex justify-between items-center mt-5 px-5">
          <Tabs
            value={currentPage}
            textColor="inherit"
            className="flex justify-between items-center max-w-none"
            sx={{
              '.MuiTabs-indicator': {
                display: 'none', // Ensures the indicator is hidden
              },
            }}
          >
            <Tab
              tabIndex={2}
              icon={<CircleRoundedIcon />}
              onClick={(value) => onChange(value)}
              className="text-primary-0 p-0 min-w-0 mr-2"
            />
            <Tab
              tabIndex={2}
              icon={<CircleRoundedIcon />}
              onClick={(value) => onChange(value)}
              className="text-primary-0 p-0 min-w-0 mr-2"
            />
            <Tab
              tabIndex={3}
              icon={<CircleRoundedIcon />}
              onClick={(value) => onChange(value)}
              className="text-primary-0 p-0 min-w-0"
            />
          </Tabs>

          {/* See more */}
          <Button.SeeMoreButton onClick={() => {}} />
        </Box>
      </Grid2>
      <Grid2 size={3}>
        <Text.HomeTitle text="Skills" index="03" />
      </Grid2>
    </Grid2>
  );
};

export default Skills;
