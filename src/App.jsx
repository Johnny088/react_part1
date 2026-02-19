import CarsPage from './pages/carsPages/CarsPage';
import { Route, Routes } from 'react-router';
import './App.css';
import DefaultLayout from './components/layouts/DefaulltLoyout';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <>
      <DefaultLayout />
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route index element={<MainPage />} />
        <Route path="cars" element={<CarsPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
