import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Container, List } from '@chakra-ui/react';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container width={496} mt={3}>
      <List>
        {filteredContacts &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    </Container>
  );
};

export default ContactList;
