import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router';
import { useFormik } from 'formik';
import { object, string, number } from 'yup';
import { useAction } from '../../store/hooks/useAction';
import { Select, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
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
  // height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
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
const initialValues = {
  name: '',
  volume: 0,
  price: 0,
  color: '',
  desciption: '',
  year: 2000,
  image: '',
  manufactureId: 0,
};
// ==========================================================
const CarUpdateForm = () => {
  const { updateCar, loadBrands } = useAction();
  const navigate = useNavigate();
  const { brands, isLoaded } = useSelector(state => state.brand);
  const { id } = useParams();

  // ---------------------------- validate ------------------------------------------------------

  const validate = object({
    name: string()
      .required('required')
      .max(100, 'max length can be 100 symbols'),
    volume: number().required('required').min(1.3, `can't be less than 1.3`),
    price: number().required('required').min(100, `can't be less than 100$`),
    color: string()
      .required('required')
      .max(100, 'max length can be 100 symbols'),
    desciption: string().required('required'),
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
      console.log(newCar);
      const result = await updateCar(newCar);
      console.log(result);
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

  //   --------------------------------------------------use effect -----------------------------------------
  useEffect(() => {
    const fetchBrands = async () => {
      await loadBrands();
    };
    if (!isLoaded) {
      fetchBrands();
    }
  }, []);
  useEffect(() => {
    const getCar = async () => {
      const carUrl = import.meta.env.VITE_BASE_API_CAR_URL;
      const response = await axios.get(`${carUrl}/${id}`);
      if (response.status >= 200 && response.status < 300) {
        const { data } = response;
        const oldDataCar = data.data;
        if (oldDataCar.manufacture) {
          data.data;
          oldDataCar.manufactureId = oldDataCar.manufacture.id;
        } else {
          oldDataCar.manufactureId = 0;
        }
        await formik.setValues(oldDataCar, false);
      } else {
        navigate('/cars');
      }
    };
    getCar();
  }, []);
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
            Updating the Car
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
            {/* --------------------------------------- getting name of model instead brand---------------------------------------------------- */}
            <FormControl>
              <FormLabel htmlFor="manufactureId">Brand</FormLabel>
              <Select
                id="manufactureId"
                name="manufactureId"
                value={formik.values.manufactureId}
                onChange={formik.handleChange}
              >
                <MenuItem value={0}>Uknown</MenuItem>
                {brands.map(brand => (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* ------------------------------------------------------------------------------------------- */}
            <FormControl>
              <FormLabel htmlFor="model">Model:</FormLabel>
              <TextField
                id="model"
                name="name"
                placeholder="Model"
                autoComplete="model"
                fullWidth
                type="text"
                variant="outlined"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('name')}
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
              <FormLabel htmlFor="desciption">Description</FormLabel>
              <TextField
                id="desciption"
                name="desciption"
                placeholder="desciption"
                autoComplete="desciption"
                fullWidth
                type="text"
                value={formik.values.desciption}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {getError('desciption')}
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
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <TextField
                id="image"
                name="image"
                placeholder="Image"
                autoComplete="image"
                fullWidth
                type="text"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="error">
              update
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </Box>
  );
};
export default CarUpdateForm;
