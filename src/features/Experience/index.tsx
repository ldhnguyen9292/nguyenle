import { Box, Link, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

import { ContentLayout } from '@/components/Layout';
import { ExperienceData } from '@/constants/data';

interface Project {
  project: string;
  role: string;
  description: string;
  teamSize: number;
  responsibilities: string[];
  technologiesUsed: string[];
  reference?: string;
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // smooth scroll to the project
  const scrollToProject = (project: string) => {
    const element = document.getElementById(project);
    // should minus the height of the header
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element?.getBoundingClientRect().top;
    const elementPosition = elementRect ? elementRect - bodyRect : 0;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
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

              {item.projects.length > 0 &&
                item.projects.map((project: Project, projectIndex) => (
                  <Box id={project.project} key={projectIndex} mt={3}>
                    <Typography variant="h6" className="font-bold">
                      Project: {project.project}
                    </Typography>
                    <Typography variant="body1">Role: {project.role}</Typography>
                    <Typography variant="body1">Description: {project.description}</Typography>
                    <Typography variant="body1">Team size: {project.teamSize}</Typography>
                    <Typography variant="body1" className="italic">
                      Responsibilities:
                    </Typography>
                    <ul className="list-disc">
                      {project.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="ml-5">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <Typography variant="body1" className="italic">
                      Technologies used:
                    </Typography>
                    <ul className="list-disc">
                      {project.technologiesUsed.map((technology, techIndex) => (
                        <li key={techIndex} className="ml-5">
                          {technology}
                        </li>
                      ))}
                    </ul>
                    {project.reference && (
                      <Typography variant="body1">
                        Reference:{' '}
                        <Link href={project.reference} target="_blank" rel="noopener noreferrer">
                          {project.reference}
                        </Link>
                      </Typography>
                    )}
                  </Box>
                ))}

              {item.projects.length > 0 && (
                <Box className="absolute top-[80px] left-[20px]">
                  <Box className="fixed w-[200px] bg-primary-2 p-5 text-secondary rounded-ss-xl rounded-ee-xl border-solid border-4 border-gray-500">
                    <Typography variant="h6">Projects</Typography>
                    <ol className="list-decimal">
                      {item.projects.map((project: Project, projectIndex) => (
                        <li
                          key={projectIndex}
                          className="font-bold ml-5 cursor-pointer"
                          onClick={() => scrollToProject(project.project)}
                        >
                          {project.project}
                        </li>
                      ))}
                    </ol>
                  </Box>
                </Box>
              )}
            </Box>
          )
      )}
    </ContentLayout>
  );
};

export default Experience;
