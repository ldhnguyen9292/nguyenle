export const globalEnv = {
  URL: process.env.NEXT_PUBLIC_URL || 'localhost:3000',
  LOGO_EMAIL_URL: process.env.NEXT_PUBLIC_LOGO_EMAIL_URL || 'localhost:3000/images/logo.png',

  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_TO_OWNER: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TO_OWNER || '',
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',

  // CV
  CV_URL: process.env.NEXT_PUBLIC_CV_URL || '/files/LE_DAI_HOANG NGUYEN-BACKEND_DEVELOPER.pdf',

  // Default width and height for home layout
  DEFAULT_WIDTH: 1440,
  DEFAULT_HEIGHT: 1314,
};
