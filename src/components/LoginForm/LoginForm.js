import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import {
  FormLabel,
  Input,
  Button,
  Flex,
  Stack,
  Text,
  Box,
  FormControl,
  ScaleFade,
  Heading,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));
    form.reset();
  };

  return (
    <>
      <Flex justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <ScaleFade initialScale={0.7} in>
            <Box
              rounded={'lg'}
              boxShadow={'lg'}
              p={8}
              bgGradient="linear(to-r, green.200, pink.500)"
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={4} mb={3}>
                  <FormControl>
                    <FormLabel>
                      Email*
                      <Input
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="across@mail.com"
                        required
                      />
                    </FormLabel>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      Password
                      <Input
                        autoComplete="off"
                        type="password"
                        name="password"
                        placeholder="examplepwd12345"
                        required
                      />
                    </FormLabel>
                  </FormControl>
                </Stack>
                <Stack spacing={8}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  ></Stack>
                  <Button type="submit" colorScheme="blue">
                    Log In
                  </Button>
                </Stack>
                <Stack pt={6}></Stack>

                <Stack pt={6}>
                  <Text align={'center'}>
                    You are not user?
                    <Link
                      style={{
                        color: '#66bfbf',
                        marginLeft: '6px',
                        textDecoration: 'underline',
                      }}
                      to="/register"
                    >
                      Let's registrate
                    </Link>
                  </Text>
                </Stack>
              </form>
            </Box>
          </ScaleFade>
        </Stack>
      </Flex>
    </>
  );
};
