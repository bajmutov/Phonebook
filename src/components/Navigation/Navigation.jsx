import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/auth/selectors';
import { Link } from './Navigation.styled';
import { Box } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <Box ml={6}>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="contacts">Contacts</Link>}
      </nav>
    </Box>
  );
};
