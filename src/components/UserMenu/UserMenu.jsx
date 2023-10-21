import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
import toast from 'react-hot-toast';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  // const navigate = useNavigate();

  const handleLogOut = () => {
    console.log('fuck');
    dispatch(logOut());
    toast(`We will miss you 🙃, ${email}`, {
      duration: 2000,
      position: 'top-right',
      icon: '🤠',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
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
