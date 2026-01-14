import author from './Authors.json';
import { Box, Grid } from '@mui/material';

const AuthorPage = () => {
  return (
    <ul>
      {author.map(a => {
        return (
          <li>
            <p>{a.author}</p>
            <p>{a.birthDate}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default AuthorPage;
