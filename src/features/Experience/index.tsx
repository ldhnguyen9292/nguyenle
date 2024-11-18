import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import { Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { ExperienceData } from '@/constants/data';
import Content from './Content';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <ContentLayout>
      <Tabs
        value={activeTab}
        className="bg-primary-0 rounded-full px-2 md:px-4 lg:px-6 xl:px-10 w-[95vw] sm:w-[60vw] lg:w-[50vw] max-w-[370px] sm:max-w-[512px]"
        sx={{
          '.MuiTabs-indicator': {
            display: 'none', // Ensures the indicator is hidden
          },
        }}
      >
        {ExperienceData.map((item, index) => (
          <div
            key={`${item.company}-${index}`}
            className={`bg-no-repeat bg-contain hover:bg-button-white w-[33%] my-2 flex items-center justify-center min-h-0 ${
              index === activeTab ? 'bg-button-white' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            <Tab
              key={index}
              label={item.shortName}
              className={`text-secondary text-body2-sm md:text-body2-md lg:text-body2-lg p-0 w-full min-h-0 h-[33px] sm:h-[38px] md:h-[45px] lg:h-[46px] hover:text-primary font-bold ${
                index === activeTab ? '!text-primary' : ''
              }`}
            />
          </div>
        ))}
      </Tabs>

      {ExperienceData.map(
        (item, index) =>
          activeTab === index && (
            <Box key={index}>
              <Text type="h5" className="text-center">
                {item.company}
              </Text>
              <Text type="h6" className="text-center">
                {item.period.length > 1 ? item.period.join(' - ') : [...item.period, 'Present'].join(' - ')}
              </Text>
              {item.address && (
                <Text type="body1" className="text-center">
                  {item.address}
                </Text>
              )}

              {item.projects.length > 0 && <Content projects={item.projects} />}
            </Box>
          )
      )}
    </ContentLayout>
  );
};

export default Experience;
