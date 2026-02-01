import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

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
//               ------------------------------------ start -------------------------------------
const AuthorUpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setErrors] = useState({});
  const [currentData, setData] = useState({
    name: '',
    birth_date: '',
    image: '',
  });
  // ---------------------------- validate ------------------------------------------------------
  // // const regexAutor = /^[A-Za-z]{2,}\s[A-Za-z]{3,}$/;
  // const maxYear = new Date().toISOString().split('T')[0];

  // // const isAuthorValid = regexAutor.test(data.name);
  // const isDateValid = maxYear >= data.birthDate && data.birth_date !== '';
  // const isFormValid = isAuthorValid && isDateValid;

  // -----------------------------------------------submit ----------------------------------------
  const FormSubmitHandle = async e => {
    e.preventDefault();
    // const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
    // const response = await axios.patch(authorsUrl);
    // if (response.status === 200) {
    //   navigate('/authors');
    // }
    console.log('hello');
  };

  // ----------------------------------------- getting errors ---------------------------------------
  const getError = prop => {
    return error[prop] ? (
      <Typography sx={{ color: 'red', fontSize: '16px' }}>
        {error[prop]}
      </Typography>
    ) : null;
  };
  // --------------------------------------------useEffect -------------------
  useEffect(() => {
    const getAuthor = async () => {
      const authorUrlId = import.meta.env.VITE_AUTHORS_URL;
      const response = await axios.get(`${authorUrlId}/${id}`);
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
        setData({
          name: data.name,
          birth_date: data.birth_date,
          image: data.image,
        });
        console.log(
          `set data ==> ${currentData.name} ${currentData.birth_date} ${currentData.image}`,
        );
      }
    };
    getAuthor();
  }, []);

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
            <FormControl>
              <FormLabel htmlFor="name">Author</FormLabel>
              <TextField
                name="name"
                placeholder="Author"
                autoComplete="author"
                fullWidth
                variant="outlined"
                value={currentData.name}
                onChange={e => {
                  return setData({ ...currentData, name: e.target.value });
                }}
              />
            </FormControl>
            <Box
              component="p"
              sx={{ color: 'red', fontWeight: 'bold', fontSize: ['26px'] }}
            >
              {/* {errors.name} */}
            </Box>

            <FormControl>
              <FormLabel htmlFor="birth_date">Birthday</FormLabel>
              <TextField
                name="birth_date"
                placeholder="birthday year"
                autoComplete="year"
                fullWidth
                type="date"
                variant="outlined"
                required
                value={currentData.birth_date}
                onChange={e =>
                  setData({ ...currentData, birth_date: e.target.value })
                }
              />
            </FormControl>
            <Box
              component="p"
              sx={{ color: 'red', fontWeight: 'bold', fontSize: ['26px'] }}
            >
              {/* {errors.birth_date} */}
            </Box>

            <FormControl>
              <FormLabel htmlFor="cover">Cover</FormLabel>
              <TextField
                name="image"
                placeholder="cover"
                autoComplete="cover"
                fullWidth
                variant="outlined"
                value={currentData.image}
                onChange={e =>
                  setData({ ...currentData, image: e.target.value })
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              // disabled={!isFormValid}
            >
              add
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </Box>
  );
};
export default AuthorUpdateForm;
