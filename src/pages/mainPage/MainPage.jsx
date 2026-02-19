import { Button } from '@mui/material';
import { Link } from 'react-router';

const MainPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Main Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/cars">
          <Button variant="contained" sx={{ mx: 1 }}>
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
