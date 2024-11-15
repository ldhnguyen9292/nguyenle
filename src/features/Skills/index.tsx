import { Box, Rating } from '@mui/material';

import SkillImage from '@/assets/images/skills.webp';
import { Image, Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { SkillsData } from '@/constants/data';

const Skills: React.FC = () => {
  return (
    <ContentLayout>
      <Image src={SkillImage.src} alt="Skills" width={150} height={100} />
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5">
        {SkillsData.map((data, index) => (
          <Box key={index} className="border border-gray-200 p-4 rounded-md shadow-md transition-all hover:scale-110">
            <Text type="body1" className="font-bold">
              {data.category}
            </Text>
            {data.skills.map((skill, index) => (
              <Box key={skill.name} className="flex items-center justify-between">
                <Text type="body2" key={index} className="flex justify-between items-center">
                  {skill.name}
                </Text>
                <Rating
                  name="read-only"
                  value={skill.score}
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
            ))}
          </Box>
        ))}
      </Box>
    </ContentLayout>
  );
};

export default Skills;
