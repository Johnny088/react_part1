import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAction } from '../../store/hooks/useAction';
import UpdateIcon from '@mui/icons-material/Update';
import { Box } from '@mui/material';
import { Link } from 'react-router';

export default function CarCard({ item }) {
  const { removeCar } = useAction();
  const deleteHadler = async () => {
    try {
      console.log(item.id);
      await removeCar(item.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: 'cover' }}
          image={
            item.image
              ? item.image
              : `https://cdn.vectorstock.com/i/500p/63/05/auto-sports-car-vehicle-silhouette-front-vector-45326305.jpg`
          }
          alt="photo"
        ></CardMedia>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: 'center' }}
        >
          Brand: {item.manufacture?.name}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Model: {item.name}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Volume: {item.volume}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Price: {item.price}$
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Color: {item.color}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Description: {item.desciption}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '12px',
          }}
        >
          Year: {item.year}
        </Typography>
      </CardActionArea>
      <Box sx={{ textAlign: 'center' }}>
        <DeleteForeverIcon
          color="error"
          onClick={deleteHadler}
          sx={{ cursor: 'pointer', fontSize: '30px', marginBottom: '12px' }}
        />
        <Link to={`/cars/update/${item.id}`}>
          <UpdateIcon
            sx={{
              color: '#00a152',
              fontSize: '30px',
              marginBottom: '12px',
              cursor: 'pointer',
            }}
          />
        </Link>
      </Box>
    </Card>
  );
}
