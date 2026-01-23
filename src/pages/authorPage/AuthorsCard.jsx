import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function AuthorsCard({ item, deleteCallBack }) {
  const deleteClickHandler = () => {
    console.log('handler'); // =========================================> temp
    console.log(item.id);
    deleteCallBack(item.id);
  };
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            item.photo
              ? item.photo
              : 'https://4ddig.tenorshare.com/images/photo-recovery/images-not-found.jpg'
          }
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.author}
          </Typography>
          <Typography variant="p" sx={{ color: 'text.secondary' }}>
            {item.birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DeleteForeverIcon
        color="error"
        onClick={deleteClickHandler}
        sx={{ cursor: 'pointer' }}
      />
    </Card>
  );
}
