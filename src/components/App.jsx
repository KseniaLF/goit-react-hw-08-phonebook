import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
