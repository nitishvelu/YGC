import { Flex, Box, Heading, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import LoanBox from "../components/LoanBox";
import prisma from "../prisma";

export default function Index({ Loans }) {
  const router = useRouter();

  return (
    <Flex flexDir="column" w="100vw" alignItems={"center"}>
      <Box
        mx="10"
        my="1"
        px="5"
        py="10"
        w={["90vw", "80vw", "40vw"]}
        rounded="lg"
        shadow={"lg"}
        justifyContent={"center"}
        bg="gray.100"
        h="90vh"
      >
        <Box display={"inline-block"} mb={2}>
          <Heading display={"inline"} mr={["90", "300", "470"]}>
            Running
          </Heading>
          <Button
            onClick={() => router.push("/loan")}
            color="white"
            bg="green.300"
            colorScheme="green"
            display={"inline"}
            shadow="base"
          >
            New +
          </Button>
        </Box>
        <VStack h="95%" spacing={3} overflowY="auto">
          {Loans?.map((person) => (
            <LoanBox
              name={person.name}
              amount={person.amount}
              tenure={person.createdAt}
              phone={person.updatedAt}
              key={person.id}
            />
          ))}
        </VStack>
      </Box>
    </Flex>
  );
}

export async function getServerSideProps() {
  const Loans = await prisma.post.findMany();
  // Loans?.map((x) => {
  //   x.createdAt = Math.floor(x.createdAt / 1000);
  //   x.updatedAt = Math.floor(x.updateddAt / 1000);
  //   return x;
  // });
  return {
    props: { Loans },
  };
}
