import { Box, Grid2 } from '@mui/material';
import Image from 'next/image';

import GGMap from '@/assets/images/gg-map.webp';
import { Form, Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { SocialNetworks } from '@/constants/data';

const Contact: React.FC = () => {
  // Redirect to social networks
  const redirectToSocialNetwork = (url: string) => {
    window.open(url, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Ho+Chi+Minh+City/@10.754792,106.695227,10z', '_blank');
  };

  return (
    <ContentLayout className="bg-contact-bg bg-cover !my-0 py-10">
      <Box className="bg-primary-0 rounded-3xl shadow-md mb-5 p-5 flex flex-col items-center justify-between">
        <Box className="text-center">
          <Text type="h6" className="uppercase !text-fourth font-bold">
            Get in Touch
          </Text>
          <Text type="body1" className="text-secondary font-medium">
            Feel free to reach out for collaborations, questions, or just to say hello.
          </Text>
          {/* Alternative Contact Options */}
          <div className="flex align-center justify-center m-2 gap-5">
            {Object.entries(SocialNetworks).map(([key, icon], index) => {
              return (
                <div key={key + index} className="w-[10vw] h-[10vw] max-w-[76px] max-h-[76px]">
                  <icon.src
                    className="w-full h-full cursor-pointer fill-white hover:fill-blue-300"
                    preserveAspectRatio="none"
                    onClick={() => redirectToSocialNetwork(icon.url)}
                  />
                </div>
              );
            })}
          </div>
        </Box>

        {/* Contact Form */}
        <Grid2 container className="" spacing={{ xs: 2, md: 3, xl: 5 }}>
          <Grid2
            size={{ xs: 12, md: 6 }}
            className="border-2 border-solid border-gray-500 p-2 md:p-3 xl:p-5 rounded-xl"
          >
            <Form.ContactForm />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} className="cursor-pointer" onClick={handleMapClick}>
            <Image
              src={GGMap.src}
              alt="Google Static Map of Ho Chi Minh City"
              width={0}
              height={0}
              loading="lazy"
              className="w-full h-full rounded-xl"
            />
          </Grid2>
        </Grid2>
      </Box>
    </ContentLayout>
  );
};

export default Contact;
