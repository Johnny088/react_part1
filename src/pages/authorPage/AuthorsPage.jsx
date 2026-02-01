import author from './Authors.json';
import AuthorsCard from './AuthorsCard';
import { Grid, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Link } from 'react-router';
import { Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

const AuthorsPage = () => {
  const [authorsList, setAuthorsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, user } = useAuth();

  // useEffect(() => {
  //   console.log('use effect is started');
  //   const localData = localStorage.getItem('authors');
  //   if (localData) {
  //     setAuthorsList(JSON.parse(localData));
  //   } else {
  //     setAuthorsList(author);
  //     localStorage.setItem('authors', JSON.stringify(author));
  //   }
  // }, []);
  // --------------------------------------------fetch -----------------------------
  async function fetchAuthors() {
    const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
    const pageCount = 20;
    const page = 1;
    const url = `${authorsUrl}?page_size=${pageCount}&page=${page}`;
    const response = await axios.get(url);
    const { data, status } = response;
    if (status === 200) {
      const authorData = [];
      for (const book of data.data.items) {
        authorData.push(book);
      }
      setAuthorsList(authorData);
      setLoading(false);
    } else {
      console.log('something went wrong');
    }
  }
  useEffect(() => {
    fetchAuthors();
  }, []);
  // ------------------------- delete CallBack ----------------------------
  const deleteAuthor = id => {
    console.log(authorsList);
    const data = authorsList.filter(a => a.id !== id);
    console.log(data); //------------------------------------temp
    setAuthorsList(data);
    localStorage.setItem('authors', JSON.stringify(data));
  };
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress enableTrackSlot size="3rem" sx={{ mt: 4 }} />
      </Box>
    );
  }
  return (
    <Grid container spacing={2} mx={'100px'} my={'50px'}>
      {authorsList.map(a => {
        return (
          <Grid size={3} key={a.id}>
            <AuthorsCard item={a} deleteCallBack={deleteAuthor} />
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
        <Link to="/authors/create">
          <IconButton>
            <AddReactionIcon sx={{ fontSize: '40px', color: 'green' }} />
          </IconButton>
        </Link>
      </Box>
    </Grid>
  );
};

export default AuthorsPage;
