import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsFetching, selectIsLoggedin } from 'redux/auth/selectors';
// import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const isRefreshing = useSelector(selectIsFetching);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
