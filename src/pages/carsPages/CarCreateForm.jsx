import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { Formik, useFormik } from 'formik';
import { object, string, number } from 'yup';
import { useAction } from '../../store/hooks/useAction';

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
const CarCreateForm = () => {
  const { createCar } = useAction();

  const navigate = useNavigate();
  const initialValues = {
    brand: '',
    model: '',
    volume: 0,
    price: 0,
    color: '',
    description: '',
    year: 2000,
  };
  // ---------------------------- validate ------------------------------------------------------

  const validate = object({
    brand: string()
      .required('required')
      .max(100, 'max length can be 100 symbols'),
    model: string()
      .required('required')
      .max(100, 'max length can be 100 symbols'),
    volume: number().required('required').min(1.3, `can't be less than 1.3`),
    price: number().required('required').min(100, `can't be less than 100$`),
    color: string()
      .required('required')
      .max(100, 'max length can be 100 symbols'),
    description: string().required('required'),
    year: number()
      .min(2000, "are you'really? it should be replace")
      .max(2026, "your car probably isn't from future"),
  });

  const getError = prop => {
    return formik.touched[prop] && formik.errors[prop] ? (
      <Typography sx={{ mx: 1, color: 'red' }} variant="h7">
        {formik.errors[prop]}
      </Typography>
    ) : null;
  };
  // -----------------------------------------------submit ----------------------------------------
  const handleSubmit = async newCar => {
    try {
      const result = await createCar(newCar);
      if (result) navigate('/cars');
    } catch (error) {
      console.log(error);
    }
  };
  // -----------------------------------------------formik-----------------------------------------
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validate,
  });
  // ----------------------------------------- getting errors ---------------------------------------

  return (
    <Box sx={{ marginBottom: '20px' }}>
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
            Adding the new Car
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="brand">Brand:</FormLabel>
              <TextField
                id="brand"
                name="brand"
                placeholder="Brand"
                autoComplete="brand"
                fullWidth
                variant="outlined"
                type="text"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('brand')}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="model">Model:</FormLabel>
              <TextField
                id="model"
                name="model"
                placeholder="Model"
                autoComplete="model"
                fullWidth
                type="text"
                variant="outlined"
                required
                value={formik.values.model}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('model')}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="volume">Volume:</FormLabel>
              <TextField
                id="volume"
                name="volume"
                placeholder="Volume"
                autoComplete="volume"
                fullWidth
                type="number"
                value={formik.values.volume}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('volume')}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="price">Price</FormLabel>
              <TextField
                id="price"
                name="price"
                placeholder="Price"
                autoComplete="price"
                fullWidth
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('price')}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="color">Color</FormLabel>
              <TextField
                id="color"
                name="color"
                placeholder="Color"
                autoComplete="color"
                fullWidth
                type="text"
                value={formik.values.color}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('color')}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <TextField
                id="description"
                name="description"
                placeholder="description"
                autoComplete="description"
                fullWidth
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('description')}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="year">Year</FormLabel>
              <TextField
                id="year"
                name="year"
                placeholder="Year"
                autoComplete="year"
                fullWidth
                type="number"
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('year')}
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
export default CarCreateForm;
