import BookCard from './BookCard';
import booksJson from './books.json';
// import booksJson from './books.json';
import { Box, Grid, IconButton, CircularProgress } from '@mui/material';
// import { Box, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState, useEffect } from 'react';
// import BookCard from './BookCard';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

// sx == style

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, user } = useAuth();

  // спрацює тільки при першому рендері
  // useEffect(() => {
  //     // тут знаходиться код який повинен спрацювати тільки один раз
  //     const localData = localStorage.getItem("books");
  //     if (localData) {
  //         setBooks(JSON.parse(localData));
  //     } else {
  //         setBooks(booksJson);
  //         localStorage.setItem("books", JSON.stringify(booksJson));
  //     }
  // }, [])

  async function fetchBooks() {
    const booksUrl = import.meta.env.VITE_BOOKS_URL;
    const pageCount = 20;
    const page = 1;
    const url = `${booksUrl}?page_size=${pageCount}&page=${page}`;

    const response = await axios.get(url);
    const { data, status } = response;
    if (status === 200) {
      const booksData = [];
      for (const book of data.data.items) {
        const formated = {
          ...book,
          author: book.author ? book.author.name : 'невідомий',
          isFavorite: false,
        };
        booksData.push(formated);
      }
      setBooks(booksData);
      setLoading(false);
      // localStorage.setItem("books", JSON.stringify(booksData));
    } else {
      console.log('Не вдалося завантажити книги');
    }
  }

  useEffect(() => {
    // const localData = localStorage.getItem("books");
    // if (localData) {
    //     setBooks(JSON.parse(localData));
    //     setLoading(false);
    // } else {
    //     // запит на API
    //     fetchBooks();
    // }
    fetchBooks();
  }, []);

  const deleteBook = async id => {
    const booksUrl = import.meta.env.VITE_BOOKS_URL;
    try {
      await axios.delete(`${booksUrl}/${id}`);
    } catch (error) {
      console.log(error);
    }
    await fetchBooks();
  };

  const setFavorite = (id, favorite) => {
    const newList = [...books];
    const index = newList.findIndex(b => b.id === id);
    if (index !== -1) {
      newList[index].isFavorite = favorite;
      setBooks(newList);
      localStorage.setItem('books', JSON.stringify(newList));
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress enableTrackSlot size="3rem" sx={{ mt: 4 }} />
      </Box>
    );
  }

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
          <Grid size={4} key={b.id}>
            <BookCard
              book={b}
              deleteCallback={deleteBook}
              favoriteCallback={setFavorite}
            />
          </Grid>
        ))}
        {isAuth && user.role === 'admin' && (
          <Grid size={books.length % 3 === 0 ? 12 : 4}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Link to="create">
                <IconButton color="secondary">
                  <AddCircleIcon sx={{ fontSize: '3em' }} />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BookListPage;
