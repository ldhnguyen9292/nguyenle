import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { Box, Grid2, Rating, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import { Button, Text } from '@/components/Elements';
import { SkillsData } from '@/constants/data';
import { useRouter } from 'next/navigation';

interface SkillsData {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const directToSkills = () => {
    router.push('/skills');
  };

  return (
    <Grid2 container className="w-full">
      <Grid2 size={7} className="px-10 py-2 h-75">
        <Box className="flex flex-col justify-between items-center border-solid border-gray-300 border-2 rounded-2xl p-5 h-full">
          {SkillsData.map((skill, index) => {
            return (
              activeTab === index && (
                <Box key={index} className="flex flex-col justify-start items-start w-full h-full">
                  <Text variant="h6" className="font-bold">
                    {skill.category}
                  </Text>
                  {skill.skills.map((item, index) => {
                    return (
                      <Box key={index} className="flex justify-between items-center w-full">
                        <Text variant="body1" className="font-normal">
                          {item.name}
                        </Text>
                        <Rating
                          name="read-only"
                          value={item.score}
                          readOnly
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
              )
            );
          })}
        </Box>

        {/* Navigation */}
        <Box className="flex justify-between items-center mt-5 px-5">
          <Tabs
            value={activeTab}
            textColor="inherit"
            onChange={handleTabChange}
            className="flex justify-between items-center max-w-none"
            sx={{
              '.MuiTabs-indicator': {
                display: 'none', // Ensures the indicator is hidden
              },
            }}
          >
            {SkillsData.map((_, index) => {
              return (
                <Tab
                  key={index}
                  label={index + 1}
                  icon={<CircleRoundedIcon />}
                  className={`text-primary-0 p-0 min-w-0 mr-2 ${
                    activeTab === index ? 'text-primary' : 'text-primary-0'
                  }`}
                />
              );
            })}
          </Tabs>

          {/* See more */}
          <Button.SeeMoreButton onClick={directToSkills} />
        </Box>
      </Grid2>
      <Grid2 size={3}>
        <Text.HomeTitle text="Skills" index="03" />
      </Grid2>
    </Grid2>
  );
};

export default Skills;
