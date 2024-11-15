import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box, Button, Popover } from '@mui/material';
import { useState } from 'react';
import Scrollspy from 'react-scrollspy';

import { Link, Text } from '@/components/Elements';

interface Project {
  project: string;
  role: string;
  description: string;
  teamSize: number;
  responsibilities: string[];
  technologiesUsed: string[];
  reference?: string;
}

interface ContentProps {
  projects: Project[];
}

const Content: React.FC<ContentProps> = ({ projects }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const headerHeight = 100;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const offsetPosition = section.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {projects.map((project: Project, projectIndex) => (
        <Box id={project.project} key={project.project} mt={3}>
          <Text type="h6" className="font-bold">
            {projectIndex + 1}. Project: {project.project}
          </Text>
          <Text type="body1">Role: {project.role}</Text>
          <Text type="body1">Description: {project.description}</Text>
          <Text type="body1">Team size: {project.teamSize}</Text>
          <Text type="body1" className="italic">
            Responsibilities:
          </Text>
          <ul className="list-disc">
            {project.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex} className="ml-5">
                {responsibility}
              </li>
            ))}
          </ul>
          <Text type="body1" className="italic">
            Technologies used:
          </Text>
          <ul className="list-disc">
            {project.technologiesUsed.map((technology, techIndex) => (
              <li key={techIndex} className="ml-5">
                {technology}
              </li>
            ))}
          </ul>
          {project.reference && (
            <Text type="body1">
              Reference:{' '}
              <Link href={project.reference} target="_blank" rel="noopener noreferrer">
                {project.reference}
              </Link>
            </Text>
          )}
        </Box>
      ))}

      <Box className="absolute top-center right-[65px]">
        <Button
          id="experience-button"
          aria-label="experience-button"
          aria-controls={open ? 'experience-popover' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          className="fixed top-[50vh] bg-primary-2 rounded-s-full border-solid border-4 border-gray-500"
          onClick={handleClick}
        >
          <Box className="flex flex-col justify-center items-center">
            {!open && <MenuOpenIcon className="text-secondary" />}
            {open && <KeyboardDoubleArrowRightIcon className="text-secondary" />}
          </Box>
        </Button>
        <Popover
          id="experience-popover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          disableScrollLock={true}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          slotProps={{
            paper: {
              className: 'bg-primary-0 rounded-xl border-solid border-4 border-gray-500 p-5',
            },
          }}
        >
          <Scrollspy
            items={projects.map((project) => project.project)}
            currentClassName="font-bold"
            offset={-headerHeight * 2}
          >
            {projects.map((project: Project) => {
              return (
                <li key={project.project} className={'text-secondary w-40 list-decimal ml-5'}>
                  <Link
                    href={`#${project.project}`}
                    className="no-underline"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(project.project);
                    }}
                  >
                    {project.project}
                  </Link>
                </li>
              );
            })}
          </Scrollspy>
        </Popover>
      </Box>
    </>
  );
};

export default Content;
