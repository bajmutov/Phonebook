import { Flex } from '@chakra-ui/react';
import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Flex ml={'auto'}>
      <Link to="/login">Log In</Link>
      <Link to="/register">Registration</Link>
    </Flex>
  );
};
