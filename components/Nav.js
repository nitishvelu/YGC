import React from 'react';
import { Flex, Button, Heading,Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/client';

export default function Nav() {
  return (
    <Flex
      px="2"
      py="1"
      justifyContent="center"
      >
        <Heading>Velu
        <Text as={'span'} fontSize="lg" color={'green.400'}>
              {' '}Lends
            </Text>
        </Heading>
      {/* <Button my="1" colorScheme="blue" onClick={() => signOut()}>
        Sign out
      </Button> */}
    </Flex>
  );
}
