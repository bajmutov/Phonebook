import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import Spinner from './Spinner/Spinner';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ToastContainer
        position="top-right"
        reverseOrder={false}
        autoClose={1500}
      />
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Spinner size={150} />}
      {error && <b>Error! Reload the page</b>}
      <ContactList />
    </div>
  );
};

export default App;
