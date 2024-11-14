import { Box, Grid2 } from '@mui/material';

import { Form, Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { SocialNetworks } from '@/constants/data';

const Contact: React.FC = () => {
  // Redirect to social networks
  const redirectToSocialNetwork = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <ContentLayout className="bg-contact-bg bg-cover !my-0 py-10">
      <Box className="bg-primary-0 rounded-3xl shadow-md mb-5 p-5 flex flex-col items-center justify-between">
        <Box className="text-center">
          <Text variant="h4" font="heading" className="uppercase !text-fourth font-bold">
            Get in Touch
          </Text>
          <Text variant="h6" font="body" className="text-secondary font-medium">
            Feel free to reach out for collaborations, questions, or just to say hello.
          </Text>
          {/* Alternative Contact Options */}
          <div className="flex align-center justify-center m-2 gap-5">
            {Object.entries(SocialNetworks).map(([key, icon], index) => {
              return (
                <div key={key + index} className="w-[76px] h-[76px]">
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
        <Grid2 container className="w-full">
          <Grid2 size={7} className="min-h-97.5 px-5">
            <Form.ContactForm />
          </Grid2>
          <Grid2 size={5} className="border-l-2 px-5 border-dashed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.251541797!2d106.69522764999999!3d10.754792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1731561664862!5m2!1sen!2s"
              className="border-none w-full h-full rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid2>
        </Grid2>
      </Box>
    </ContentLayout>
  );
};

export default Contact;
