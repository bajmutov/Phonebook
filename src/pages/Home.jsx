import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Heading
      p="300px 0"
      textShadow="3px 2px orange"
      fontSize={'4xl'}
      textAlign={'center'}
    >
      Welcome to the PHONEBOOK storage app!{' '}
      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
      <p>
        You can view your &nbsp;
        <Link
          to="/contacts"
          style={{ color: '#000', textDecoration: 'underline' }}
        >
          contacts
        </Link>
      </p>
    </Heading>
  );
}
