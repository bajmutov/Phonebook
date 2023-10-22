import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/auth/selectors';
import { Header, Container } from './Appbar.styled';
import { Heading } from '@chakra-ui/react';
import { FcMultipleSmartphones } from 'react-icons/fc';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <Header>
      <Container>
        <Container>
          <FcMultipleSmartphones size={'2em'} />
          <Heading size="md">PhoneBook</Heading>
        </Container>
        <Navigation />
      </Container>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
