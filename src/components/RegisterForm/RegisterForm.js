import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  ScaleFade,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const name = form.elements.name.value;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    toast.success(`You are registered 🤗, ${name}`, {
      duration: 3000,
      position: 'top-right',
    });
    form.reset();
  };

  return (
    <>
      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to save your contacts ☎️
            </Text>
          </Stack>
          <ScaleFade initialScale={0.7} in>
            <Box
              rounded={'lg'}
              bgGradient="linear(to-r, green.200, pink.500)"
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={20} w={'350px'}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <FormControl>
                      <FormLabel isRequired>
                        Username*
                        <Input
                          required
                          autoComplete="off"
                          type="text"
                          name="name"
                          placeholder="Jacob Mercer"
                          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                      </FormLabel>
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        Email*
                        <Input
                          autoComplete="off"
                          type="email"
                          name="email"
                          placeholder="across@mail.com"
                        />
                      </FormLabel>
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        Password*
                        <InputGroup>
                          <Input
                            autoComplete="off"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                          />
                          <InputRightElement h={'full'}>
                            <Button
                              variant={'ghost'}
                              onClick={() =>
                                setShowPassword(showPassword => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormLabel>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        type="submit"
                        loadingText="Submitting"
                        size="lg"
                        colorScheme="blue"
                      >
                        Registration
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={'center'}>
                        Already a user?
                        <Link
                          style={{
                            color: '#66bfbf',
                            marginLeft: '6px',
                            textDecoration: 'underline',
                          }}
                          to="/login"
                        >
                          Login
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </ScaleFade>
        </Stack>
      </Flex>
    </>
  );
};
