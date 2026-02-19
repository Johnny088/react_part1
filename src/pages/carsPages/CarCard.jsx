import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';

export default function CarCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
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
          }}
        >
          Year: {item.year}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
