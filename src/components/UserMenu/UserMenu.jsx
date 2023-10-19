import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { user } = useAuth();

  const handleLogOut = () => {
    console.log('f');
    // dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {5555}</p>
      {/* <p className={css.username}>Welcome, {user.name}</p> */}
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
