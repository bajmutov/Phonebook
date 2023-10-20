import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

export default ContactList;
