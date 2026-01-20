import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: '0px auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

const AuthorCreateForm = () => {
  const [data, setData] = useState({
    author: '',
    birthDate: '',
    photo: '',
  });
  const FormSubmitHandle = e => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Box>
      <SignInContainer
        display="flex"
        direction="column"
        justifyContent="space-between"
      >
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            }}
          >
            Adding the new Author
          </Typography>
          <Box
            component="form"
            onSubmit={FormSubmitHandle}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            {/* {getError('title')} */}
            <FormControl>
              <FormLabel htmlFor="author">Author</FormLabel>
              <TextField
                name="author"
                placeholder="Author"
                autoComplete="author"
                fullWidth
                variant="outlined"
                onChange={e => setData({ ...data, author: e.target.value })}
                value={data.author}
              />
            </FormControl>
            {/* {getError('author')} */}

            {/* {getError('genre')} */}
            <FormControl>
              <FormLabel htmlFor="year">Birthday</FormLabel>
              <TextField
                name="year"
                placeholder="birthday year"
                autoComplete="year"
                fullWidth
                type="date"
                variant="outlined"
                onChange={e => setData({ ...data, birthDate: e.target.value })}
                value={data.birthDate}
              />
              {/* {getError('year')} */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cover">Cover</FormLabel>
              <TextField
                name="cover"
                placeholder="cover"
                autoComplete="cover"
                fullWidth
                variant="outlined"
                onChange={e => setData({ ...data, photo: e.target.value })}
                value={data.photo}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="error">
              add
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </Box>
  );
};
export default AuthorCreateForm;
