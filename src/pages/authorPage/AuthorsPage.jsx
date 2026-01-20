import author from './Authors.json';
import AuthorsCard from './AuthorsCard';
import { Grid } from '@mui/material';

const AuthorsPage = () => {
  return (
    <Grid container spacing={2} mx={'100px'} my={'50px'}>
      {author.map(a => {
        return (
          <Grid size={3} key={a.id}>
            <AuthorsCard author={a} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AuthorsPage;
