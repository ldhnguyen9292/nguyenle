import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

import { ContentLayout } from '@/components/Layout';
import { ExperienceData } from '@/constants/data';
import Content from './Content';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <ContentLayout>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        className="bg-primary-0 rounded-full px-10"
        sx={{
          '.MuiTabs-indicator': {
            display: 'none', // Ensures the indicator is hidden
          },
        }}
      >
        {ExperienceData.map((item, index) => (
          <Tab
            key={index}
            label={item.shortName}
            className={`text-secondary my-1 w-[150px] min-h-11.25 p-0 bg-no-repeat bg-contain hover:bg-button-white hover:text-primary ${
              index === activeTab ? '!text-primary bg-button-white' : ''
            }`}
          />
        ))}
      </Tabs>

      {ExperienceData.map(
        (item, index) =>
          activeTab === index && (
            <Box key={index} p={3}>
              <Typography variant="h4" className="text-center">
                {item.company}
              </Typography>
              <Typography variant="h5" className="text-center">
                {item.period.length > 1 ? item.period.join(' - ') : [...item.period, 'Present'].join(' - ')}
              </Typography>
              {item.address && (
                <Typography variant="body1" className="text-center">
                  {item.address}
                </Typography>
              )}

              {item.projects.length > 0 && <Content projects={item.projects} />}
            </Box>
          )
      )}
    </ContentLayout>
  );
};

export default Experience;
