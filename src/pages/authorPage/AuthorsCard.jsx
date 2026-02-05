import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function AuthorsCard({ item }) {
  const dispatch = useDispatch();
  const deleteClickHandler = async () => {
    const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
    try {
      await axios.delete(`${authorsUrl}/${item.id}`);
      dispatch({ type: 'removeAuthor', payload: item.id });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            item.image
              ? item.image
              : 'https://4ddig.tenorshare.com/images/photo-recovery/images-not-found.jpg'
          }
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="p" sx={{ color: 'text.secondary' }}>
            {item.birth_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DeleteForeverIcon
        color="error"
        onClick={deleteClickHandler}
        sx={{ cursor: 'pointer' }}
      />
      <Link to={`/authors/update/${item.id}`}>
        <IconButton color="success" aria-label="share">
          <EditIcon />
        </IconButton>
      </Link>
    </Card>
  );
}
