import AuthorsCard from './AuthorsCard';
import { Grid, CircularProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Link } from 'react-router';
import { Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAction } from '../../store/hooks/useAction';

const AuthorsPage = () => {
  const { isAuth, user } = useAuth();
  const { loadAuthors } = useAction();
  const { authors, isLoaded } = useSelector(state => state.author); //root reducer
  useEffect(() => {
    loadAuthors();
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
      {authors.map(a => {
        return (
          <Grid size={3} key={a.id}>
            <AuthorsCard item={a} />
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
//
export default AuthorsPage;
