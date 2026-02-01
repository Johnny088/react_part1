import { useEffect } from 'react';
import BookCard from './BookCard';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Margin } from '@mui/icons-material';

const BooksRewiev = () => {
  const { id } = useParams();
  const [currentData, setData] = useState({});

  useEffect(() => {
    const readBook = async () => {
      const bookUrl = import.meta.env.VITE_BOOKS_URL;
      const response = await axios.get(`${bookUrl}/${id}`);
      if (response.status === 200) {
        const { data } = response;
        setData({
          id: data.data.id,
          title: data.data.title,
          image: data.data.image,
          rating: data.data.rating,
        });
      }
    };
    readBook();
  }, []);
  return (
    <Grid>
      <BookCard book={currentData} />
    </Grid>
  );
};

export default BooksRewiev;
