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
          <Grid2 size={{ xs: 12, md: 6 }} className="">
            <iframe
              name="contact-map"
              title="contact-map"
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
