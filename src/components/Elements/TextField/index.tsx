import { TextField } from '@mui/material';
import { FormikValues } from 'formik';
import * as yup from 'yup';

import { withProperties } from '@/utils/types';

interface CustomTextFieldProps extends React.ComponentProps<typeof TextField> {
  name: string;
  label: string;
  formik: FormikValues;
}

const validationSchema = yup.object({
  // Add validation rules here. For example:
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  question: yup.string().required('Please enter your question or feedback'),
});

const CustomTextField: React.FC<CustomTextFieldProps> = ({ name, label, formik, ...props }) => {
  return (
    <TextField
      {...props}
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      fullWidth
      variant="outlined"
      margin="normal"
      className="!text-white"
      slotProps={{
        input: { className: '!text-white' },
        inputLabel: { className: '!text-white' },
      }}
      sx={{ '& .MuiOutlinedInput-root': { border: '#444 1px solid' } }}
    />
  );
};

export default withProperties(CustomTextField, { validationSchema });
