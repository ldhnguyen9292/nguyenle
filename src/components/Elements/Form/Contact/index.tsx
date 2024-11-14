'use client';

import { Box } from '@mui/material';
import { useFormik } from 'formik';

import Button from '../../Button';
import TextField from '../../TextField';

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      question: '',
    },
    validationSchema: TextField.validationSchema,
    onSubmit: (e) => {
      console.log('Form submitted', e);
    },
  });

  return (
    <Box
      id="contact"
      component="form"
      noValidate
      autoComplete="off"
      className="flex flex-col items-center justify-between h-full"
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
      <Button type="submit" className="bg-tertiary-0 text-primary rounded-full m-5 border-none">
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
