import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} number={phone} />
        ))}
    </ul>
  );
};

export default ContactList;
