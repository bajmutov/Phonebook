import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  // const navigate = useNavigate();

  const handleLogOut = () => {
    console.log('fuck');
    dispatch(logOut());
    // navigate('/');
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>You Are Welcome, {email}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
