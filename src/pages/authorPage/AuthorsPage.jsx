import author from './Authors.json';
import AuthorsCard from './AuthorCard';
import { Grid } from '@mui/material';

const AuthorPage = () => {
  return (
    <Grid container spacing={2} mx={'100px'} my={'50px'}>
      {author.map(a => {
        return (
          <Grid size={3} key={author.id}>
            <AuthorsCard author={a} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AuthorPage;
