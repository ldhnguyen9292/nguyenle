'use client';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { globalEnv } from '@/config/globalEnv';
import Button from '../../Button';
import TextField from '../../TextField';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      question: '',
    },
    validationSchema: TextField.validationSchema,
    onSubmit: async (value, { resetForm }) => {
      const data = {
        from_name: value.name,
        to_name: 'Nguyen Le',
        message: `${value.question}\n\nEmail: ${value.email}`,
      };

      try {
        setIsSubmitting(true);
        emailjs.init({ publicKey: globalEnv.EMAILJS_PUBLIC_KEY });
        await emailjs.send(globalEnv.EMAILJS_SERVICE_ID, globalEnv.EMAILJS_TEMPLATE_TO_OWNER, data);
        resetForm();
        setIsSubmitting(false);
        toast('Message sent successfully');
      } catch (e) {
        const error = e as EmailJSResponseStatus;
        toast(`Failed to send message: ${error.text}`);
      }
    },
  });

  return (
    <>
      <Box
        id="contact"
        component="form"
        noValidate
        autoComplete="off"
        className="relative flex flex-col items-center justify-between h-full"
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
        <Button
          type="submit"
          className="bg-tertiary-0 text-primary rounded-full m-5 border-none"
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 border-b-2 border-primary rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            />
          )}
          {!isSubmitting && 'Send'}
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
