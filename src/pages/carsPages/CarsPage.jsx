import { Grid, IconButton, Box } from '@mui/material';
import CarCard from './CarCard';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useAction } from '../../store/hooks/useAction';
// ---------------------------------------------------------------------//
export default function CarsPage() {
  // const [cars, setCars] = useState([]);
  // const baseUrl = `https://pd411.somee.com/api/cars`;
  // async function fetchCars() {
  //   // const { data } = await axios.get(baseUrl);
  //   // console.log(data); // temp
  //   // setCars(data.data.items);
  //   // console.log('-----------------------------------');
  //   // console.log(cars);
  // }
  const { loadCars } = useAction();
  useEffect(() => {
    loadCars();
  }, []);
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
        {/* <Link to="/authors/create"> */}
        <IconButton>
          <AddReactionIcon sx={{ fontSize: '40px', color: 'green' }} />
        </IconButton>
        {/* </Link> */}
      </Box>
    </Grid>
  );
}
