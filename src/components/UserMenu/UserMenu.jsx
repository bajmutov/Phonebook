import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
import toast from 'react-hot-toast';
import { FaMandalorian } from 'react-icons/fa';
import { Button, Flex, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  const handleLogOut = () => {
    console.log('fuck');
    dispatch(logOut());
    toast(`We will miss you, ${email}`, {
      duration: 2000,
      position: 'top-right',
      icon: '🤠',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <Flex alignItems="center" ml={'auto'}>
      <span>
        <FaMandalorian />
      </span>
      <Text as="b" ml={1}>
        You Are Welcome, {email}
      </Text>
      <Button
        type="button"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        onClick={handleLogOut}
        ml={5}
      >
        Log Out
      </Button>
    </Flex>
  );
};
