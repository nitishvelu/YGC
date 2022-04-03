import React from "react";
import prisma from "../../prisma";
import {
  Button,
  Flex,
  Box,
  Text,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DateTime } from "luxon";

function LoanDetails({ user, transactions }) {
  const router = useRouter();
  console.log(transactions);
  console.log(user);
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
          <Heading display={"inline"} mr={["30", "300", "470"]}>
            {user.name}
          </Heading>
          <Button
            onClick={() => {
              router.push(`/pay/${user.id}`);
            }}
            color="white"
            bg="green.300"
            colorScheme="green"
            display={"inline"}
            shadow="base"
          >
            Pay +
          </Button>
        </Box>
        <VStack h="95%" spacing={3} overflowY="auto">
          {transactions?.map((transaction) => (
            <Box key={transaction.id} display="inline-block">
              <Text color="gray.500" display="inline" size={"xs"}>
                {DateTime.fromJSDate(transaction.createdAt).toFormat(
                  "dd MMMM , yyyy"
                )}
              </Text>
              {"          :          "}
              <Text color="green.500" display="inline" size={"md"}>
                {"₹" + transaction.amount + "   "}
              </Text>
              <Text color="gray.500" display="inline" size={"xs"}>
                {"    " + transaction.reciever}
              </Text>
              <Divider color="pink" orientation="horizontal" />
            </Box>
          ))}
          ;
        </VStack>
      </Box>
    </Flex>
  );
}

export default LoanDetails;

export async function getServerSideProps(context) {
  let { params } = context;
  const user = await prisma.post.findUnique({
    where: {
      id: params.LoanId,
    },
  });
  const transactions = await prisma.payment.findMany({
    where: {
      postId: params.LoanId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return {
    props: { user, transactions },
  };
}
