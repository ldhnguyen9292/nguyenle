export const globalEnv = {
  URL: process.env.NEXT_PUBLIC_URL || 'localhost:3000',
  LOGO_EMAIL_URL: process.env.NEXT_PUBLIC_LOGO_EMAIL_URL || 'localhost:3000/images/logo.png',

  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_TO_OWNER: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TO_OWNER || '',
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',

  // CV
  CV_URL:
    process.env.NEXT_PUBLIC_CV_URL ||
    'https://drive.google.com/file/d/1W6JxIYfikRTzQCE8eINoY_Roesqz3TFs/view?usp=sharing',
};
