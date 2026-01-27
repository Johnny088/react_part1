import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import BookListPage from './pages/booksPage/BookListPage';
import AuthorPage from './pages/authorPage/AuthorsPage';
import AuthorCreateForm from './pages/authorPage/AuthorCreateForm';
import { Routes, Route } from 'react-router';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  // const [active, setActive] = useState(1);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/authors" element={<AuthorPage />} />
        <Route path="/authors/create" element={<AuthorCreateForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
