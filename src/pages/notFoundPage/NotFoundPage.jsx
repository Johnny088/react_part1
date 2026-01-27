import { Typography, Box } from '@mui/material';
import styles from './NotFoundPage.module.css';
import { useState } from 'react';
const NotFoundPage = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = e => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <Box className={styles.wrapper}>
        <Box
          className={styles.text}
          onMouseMove={handleMouseMove}
          sx={{ minHeight: '100vh' }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h2">Uh, Ohh</Typography>
          <Typography variant="h3">
            Sorry we can't find what you're looking for, because it's too dark
            in here
          </Typography>
        </Box>
      </Box>
      <Box className={styles.torch} sx={{ top: pos.y, left: pos.x }} />
    </>
  );
};
export default NotFoundPage;
