import { Box, Grid2 } from '@mui/material';
import { useFormik } from 'formik';

import { Button, Text, TextField } from '@/components/Elements';

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      question: '',
    },
    validationSchema: TextField.validationSchema,
    onSubmit: () => {},
  });

  return (
    <Grid2 container className="w-full">
      <Grid2 size={7} className="px-10 py-2">
        <Box
          id="contact"
          component="form"
          noValidate
          autoComplete="off"
          className="flex flex-col items-center justify-between bg-primary-0 rounded-3xl shadow-md p-5 mt-5 min-h-97.5"
        >
          <Box className="flex justify-between items-start w-full gap-2">
            <TextField label="Name" name="name" formik={formik} placeholder="Enter your name" />
            <TextField label="Email" name="email" formik={formik} placeholder="your@email.com" />
          </Box>
          <TextField
            label="Question"
            name="question"
            formik={formik}
            multiline
            rows={4}
            placeholder="Enter question or feedback"
          />
          <Button className="bg-tertiary-0 rounded-full px-2 py-1 w-20 m-5">Send</Button>
        </Box>
      </Grid2>
      <Grid2 size={3}>
        <Text.HomeTitle text="Contact" index="05" />
      </Grid2>
    </Grid2>
  );
};

export default Contact;
