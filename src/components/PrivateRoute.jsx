import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsFetching, selectIsLoggedin } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const isRefreshing = useSelector(selectIsFetching);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
