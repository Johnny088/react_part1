import CarsPage from './pages/carsPages/CarsPage';
import { Route, Routes } from 'react-router';
import './App.css';
import DefaultLayout from './components/layouts/DefaulltLoyout';

function App() {
  return (
    <>
      <DefaultLayout />
      <Routes>
        <Route path="/" element={<DefaultLayout />}></Route>
        <Route index element={<MainPage />} />
      </Routes>
      <CarsPage />
    </>
  );
}
export default App;
