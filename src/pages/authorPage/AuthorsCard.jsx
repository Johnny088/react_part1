import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function AuthorsCard({ author }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            author.photo
              ? author.photo
              : 'https://4ddig.tenorshare.com/images/photo-recovery/images-not-found.jpg'
          }
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author.author}
          </Typography>
          <Typography variant="p" sx={{ color: 'text.secondary' }}>
            {author.birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
