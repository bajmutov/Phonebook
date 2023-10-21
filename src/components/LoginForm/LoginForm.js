import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));
    toast(`Welcome, ${email}`, {
      duration: 2000,
      position: 'top-right',
      icon: '🤠',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="formLabel">
          Email
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="across@mail.com"
          />
        </label>
        <label className="formLabel">
          Password
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="examplepwd12345"
          />
        </label>
        <button type="submit">Log In</button>
        <Link to="/register">Registration</Link>
      </form>
    </>
  );
};
