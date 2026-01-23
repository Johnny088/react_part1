import author from './Authors.json';
import AuthorsCard from './AuthorsCard';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import AuthorCreateForm from './AuthorCreateForm';

const AuthorsPage = () => {
  const [authorsList, setAuthorsList] = useState([]);

  useEffect(() => {
    console.log('use effect is started');
    const localData = localStorage.getItem('authors');
    if (localData) {
      setAuthorsList(JSON.parse(localData));
    } else {
      setAuthorsList(author);
      localStorage.setItem('authors', JSON.stringify(author));
    }
  }, []);
  // ----------------------------- adding a new book --------------------------------------
  const addNewAuthor = data => {
    data.id = authorsList.reduce((acc, item) => {
      return Math.max(acc, item.id) + 1;
    }, 0);
    let temp = JSON.parse(localStorage.getItem('authors'));
    temp.push(data);
    setAuthorsList(temp);
    localStorage.setItem('authors', JSON.stringify(temp));
  };
  // ------------------------- delete CallBack ----------------------------
  const deleteAuthor = id => {
    console.log(authorsList);
    const data = authorsList.filter(a => a.id !== id);
    console.log(data); //------------------------------------temp
    setAuthorsList(data);
    localStorage.setItem('authors', JSON.stringify(data));
  };

  return (
    <Grid container spacing={2} mx={'100px'} my={'50px'}>
      {authorsList.map(a => {
        return (
          <Grid size={3} key={a.id}>
            <AuthorsCard item={a} deleteCallBack={deleteAuthor} />
          </Grid>
        );
      })}
      <Grid container width="100%" spacing={2} justifyContent={'center'}>
        <Grid size={12}>
          <AuthorCreateForm createCallbackAuthor={addNewAuthor} />
        </Grid>
      </Grid>
      ;
    </Grid>
  );
};

export default AuthorsPage;
