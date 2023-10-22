import {
  Box,
  useColorModeValue,
  Container,
  Stack,
  Heading,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Box
        bgGradient="linear(to-r, green.200, pink.500)"
        color={useColorModeValue('white')}
      >
        <Container
          as={Stack}
          maxW={'4xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'center'}
          align={{ base: 'end', md: 'center' }}
        >
          <Heading as={'b'} fontSize={'lg'}>
            © 2023 Oleksandr Bakhmutov. All rights reserved
          </Heading>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
