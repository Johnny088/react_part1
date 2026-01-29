import BookCard from './BookCard';
import books from './books.json';
import { Box, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// sx == style

const BookListPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={2} mx="100px" my="50px">
        {books.map(b => (
          <Grid size={3} key={b.id}>
            <BookCard book={b} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookListPage;
