import CarCard from './CarCard';
import axios from 'axios';

export default CarsPage = () => {
  async function fetchCars(){
    const baseUrl = 
  }
  return (
    <Grid container spacing={2} mx={'100px'} my={'50px'}>
      {authors.map(a => {
        return (
          <Grid size={3} key={a.id}>
            <CarCard item={a} />
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
};
