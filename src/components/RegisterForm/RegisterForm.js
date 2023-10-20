import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input
            className="form-input"
            required
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="across@mail.com"
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="examplepwd12345"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <button type="submit">Registration</button>
        <Link to="/login">Login</Link>
      </form>
    </>
  );
};
