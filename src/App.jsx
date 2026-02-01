import './App.css';
import Navbar from './components/navbar/Navbar';
import BookListPage from './pages/booksPage/BookListPage';
import AuthorPage from './pages/authorPage/AuthorsPage';
import AuthorCreateForm from './pages/authorPage/AuthorCreateForm';
import { Routes, Route } from 'react-router';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import MainPage from './pages/mainPage/MainPage';
import LoginPage from './pages/registration/loginPage/LoginPage';
import RegisterPage from './pages/registration/registerPage/RegisterPage';
import AuthorUpdateForm from './pages/authorPage/AuthorsUpdateForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/authors" element={<AuthorPage />} />
        <Route path="/authors/create" element={<AuthorCreateForm />} />
        <Route path="/authors/update/:id" element={<AuthorUpdateForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
