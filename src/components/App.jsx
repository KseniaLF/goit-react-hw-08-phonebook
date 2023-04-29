import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="contacts" element={<ContactsPage />} />

        <Route path="register" element={<RegisterPage />} />

        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
