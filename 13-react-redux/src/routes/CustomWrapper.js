import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CustomWrapper() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ location }} />
  );
}
