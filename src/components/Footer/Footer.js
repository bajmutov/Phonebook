import {
  Box,
  useColorModeValue,
  Container,
  Stack,
  Heading,
  Center,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Box position="relative">
        <Box
          bgGradient="linear(to-r, green.200, pink.500)"
          color={useColorModeValue('white')}
          position="fixed"
          bottom="0"
          w="100%"
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
            <Center>
              <Heading as={'b'} fontSize={'lg'}>
                © 2023 Oleksandr Bakhmutov. All rights reserved
              </Heading>
            </Center>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
