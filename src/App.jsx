import './App.css';
import BookListPage from './pages/booksPage/BookListPage';
import AuthorPage from './pages/authorPage/AuthorsPage';
import AuthorCreateForm from './pages/authorPage/AuthorCreateForm';
import { Routes, Route } from 'react-router';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import MainPage from './pages/mainPage/MainPage';
import LoginPage from './pages/registration/loginPage/LoginPage';
import RegisterPage from './pages/registration/registerPage/RegisterPage';
import AuthorUpdateForm from './pages/authorPage/AuthorsUpdateForm';
import BookRewiev from './pages/booksPage/BookReview';
import { lightTheme } from './theme/lightTheme';
import { darkTheme } from './theme/darkTheme';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import DefaultLayout from './components/layouts/DefaultLayout';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import BookCreateForm from './pages/booksPage/BookCreateForm';
import BookUpdateForm from './pages/booksPage/BookCreateForm';

function App() {
  const { isAuth, login, user } = useAuth();

  // auth
  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      login();
    }
  }, []);

  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}></ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout />}
          setIsDark={setIsDark}
          isDark={isDark}
        >
          <Route index element={<MainPage />} />
          {/* -----------------books ------------------------ */}
          <Route path="books">
            <Route index element={<BookListPage />} />
            <Route path="review/:id" element={<BookRewiev />} />
            {isAuth && user.role === 'admin' && (
              <>
                <Route path="create" element={<BookCreateForm />} />
                <Route path="update/:id" element={<BookUpdateForm />} />
              </>
            )}
          </Route>
          {/* -------------------------- Authors --------------------------------- */}
          <Route path="authors">
            <Route index element={<AuthorPage />} />
            <Route path="create" element={<AuthorCreateForm />} />
            <Route path="update/:id" element={<AuthorUpdateForm />} />
          </Route>
          {!isAuth && (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
