// import { Container } from '@chakra-ui/react';

import ContactList from 'components/ConatctList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Spinner size={150} />}
      {error && <b>Error! Reload the page</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
