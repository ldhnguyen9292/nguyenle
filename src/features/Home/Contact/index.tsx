import { Grid2 } from '@mui/material';

import { Form, Text } from '@/components/Elements';

const Contact: React.FC = () => {
  return (
    <Grid2 container className="w-full sticky">
      <Grid2 size={7} className="px-10 py-2 bg-primary-0 rounded-3xl shadow-md mt-5 min-h-97.5">
        <Form.ContactForm />
      </Grid2>
      <Grid2 size={3}>
        <Text.HomeTitle text="Contact" index="05" />
      </Grid2>
    </Grid2>
  );
};

export default Contact;
