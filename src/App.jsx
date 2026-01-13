import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import BookListPage from './pages/booksPage/BookListPage';

function App() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Navbar />
      <BookListPage />
    </>
  );
}

export default App;
