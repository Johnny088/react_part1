import CarsPage from './pages/carsPages/CarsPage';
import { Route, Routes } from 'react-router';
import './App.css';
import DefaultLayout from './components/layouts/DefaulltLoyout';
import MainPage from './pages/mainPage/MainPage';
import CarCreateForm from './pages/carsPages/CarCreateForm';
import CarUpdateForm from './pages/carsPages/CarUpdateForm';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
          <Route path="cars">
            <Route index element={<CarsPage />} />
            <Route path="create" element={<CarCreateForm />} />
            <Route path="update/:id" element={<CarUpdateForm />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
