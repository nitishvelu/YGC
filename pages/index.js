import { useSession, signIn, signOut } from "next-auth/react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';


export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>

      </>
      )}

  return (
         <>
         <Container maxW={'3xl'}>
           <Stack
             as={Box}
             textAlign={'center'}
             spacing={{ base: 8, md: 14 }}
             py={{ base: 20, md: 36 }}>
             <Heading
               fontWeight={600}
               fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
               lineHeight={'110%'}>
               Velu<br />
               <Text as={'span'} color={'green.400'}>
                 Lends
               </Text>
             </Heading>
             <Text color={'gray.500'}>
               Web application to keep track of your lending activities and make 
               it easier to manage your business. By keeping track of all the users and
               their progress in repayment
             </Text>
             <Stack
               direction={'column'}
               spacing={3}
               align={'center'}
               alignSelf={'center'}
               position={'relative'}>
               <Button
                 colorScheme={'green'}
                 bg={'green.400'}
                 rounded={'full'}
                 onClick={() => signIn()}
                 px={6}
                 _hover={{
                   bg: 'green.500',
                 }}>
                 Login
               </Button>
             </Stack>
           </Stack>
         </Container>
       </>
    )
  
  
}