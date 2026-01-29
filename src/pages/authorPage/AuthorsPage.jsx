import author from './Authors.json';
import AuthorsCard from './AuthorsCard';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import AuthorCreateForm from './AuthorCreateForm';
import IconButton from '@mui/material/IconButton';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Link } from 'react-router';
import { Box } from '@mui/material';
// import { IconButton } from '@mui/material';

const AuthorsPage = () => {
  const [authorsList, setAuthorsList] = useState([]);

  useEffect(() => {
    console.log('use effect is started');
    const localData = localStorage.getItem('authors');
    if (localData) {
      setAuthorsList(JSON.parse(localData));
    } else {
      setAuthorsList(author);
      localStorage.setItem('authors', JSON.stringify(author));
    }
  }, []);
  // ----------------------------- adding a new book --------------------------------------
  const addNewAuthor = data => {
    data.id = authorsList.reduce((acc, item) => {
      return Math.max(acc, item.id) + 1;
    }, 0);
    let temp = JSON.parse(localStorage.getItem('authors'));
    temp.push(data);
    setAuthorsList(temp);
    localStorage.setItem('authors', JSON.stringify(temp));
  };
  // ------------------------- delete CallBack ----------------------------
  const deleteAuthor = id => {
    console.log(authorsList);
    const data = authorsList.filter(a => a.id !== id);
    console.log(data); //------------------------------------temp
    setAuthorsList(data);
    localStorage.setItem('authors', JSON.stringify(data));
  };

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
