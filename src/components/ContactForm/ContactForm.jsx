import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  Box,
  FormLabel,
  Stack,
  Heading,
  ScaleFade,
  Input,
  Button,
} from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') setName(target.value);
    else setPhone(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isAlreadyExist = contacts.find(el => el.name === name);
    if (isAlreadyExist) return alert(`${name} is already in contacts`);
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading
          textShadow="3px 2px orange"
          fontSize={'4xl'}
          textAlign={'center'}
        >
          PhoneBook
        </Heading>
      </Stack>
      <ScaleFade initialScale={0.7} in>
        <Box
          boxShadow="dark-lg"
          rounded={'lg'}
          bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
          ]}
          p={8}
        >
          <Stack spacing={20} w={'350px'}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormLabel>
                  Name
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                    placeholder="Jacob Mercer"
                  />
                </FormLabel>
                <FormLabel>
                  Number
                  <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                    placeholder="111-22-33"
                  />
                </FormLabel>
                <Button type="submit" colorScheme="blue">
                  Add your contact
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </ScaleFade>
    </Stack>
  );
};

export default ContactForm;
