import { Grid, IconButton, Box, CircularProgress } from '@mui/material';
import CarCard from './CarCard';
import { useEffect } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useAction } from '../../store/hooks/useAction';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
// ---------------------------------------------------------------------//
export default function CarsPage() {
  const { cars, isLoaded } = useSelector(state => state.car);
  const { loadCars } = useAction();
  useEffect(() => {
    loadCars();
  }, []);

  if (!isLoaded) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress enableTrackSlot size="3rem" sx={{ mt: 4 }} />
      </Box>
    );
  }

  return (
    <Grid container spacing={2} mx={'100px'} my={'50px'}>
      {cars.map(c => {
        return (
          <Grid size={3} key={c.id}>
            <CarCard item={c} />
          </Grid>
        );
      })}
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Link to="/cars/create">
          <IconButton>
            <AddReactionIcon sx={{ fontSize: '40px', color: 'green' }} />
          </IconButton>
        </Link>
      </Box>
    </Grid>
  );
}
