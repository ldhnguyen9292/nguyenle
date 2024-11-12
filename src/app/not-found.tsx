// src/app/not-found.tsx

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { Button } from '@/components/Elements';

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      bgcolor="background.default"
      color="text.primary"
    >
      <Typography variant="h1" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Typography variant="body1" mb={3}>
        You may have mistyped the address or the page may have moved.
      </Typography>
      <Link href="/" passHref>
        <Button>Go Back Home</Button>
      </Link>
    </Box>
  );
}
