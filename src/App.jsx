import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import BookListPage from './pages/booksPage/BookListPage';
import AuthorPage from './pages/authorPage/AuthorsPage';
import AuthorCreateForm from './pages/authorPage/AuthorCreateForm';

function App() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Navbar />
      {/* <BookListPage /> */}
      <AuthorPage />
      {/* <AuthorCreateForm createCallbackAuthor={addNewAuthor} /> */}
    </>
  );
}

export default App;
