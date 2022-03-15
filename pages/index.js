import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import prisma from "../prisma";

export default function Index({ Loans }) {
  const router = useRouter();
  console.log(Loans);

  return (
    <Flex flexDir="column" w="100vw" alignItems={"center"}>
      <Box
        mx="25 "
        my="2"
        px="5"
        py="10"
        w={["90vw", "100vw", "40vw"]}
        rounded="lg"
        shadow={"lg"}
        justifyContent={"center"}
        bg="gray.100"
        h="90vh"
      >
        <Box display={"inline-block"}>
          <Heading display={"inline"} mr={["100", "300", "470"]}>
            Running
          </Heading>
          <Button
            onClick={() => router.push("/loan")}
            color="white"
            bg="green.300"
            display={"inline"}
            shadow="base"
          >
            New +
          </Button>
        </Box>
        <ul>
          {Loans?.map((person) => (
            <Box key={person.id}>
              <li>{person.name}</li>
              <li>{person.tenure}</li>
            </Box>
          ))}
        </ul>
      </Box>
    </Flex>
  );
}

export async function getStaticProps() {
  const Loans = await prisma.post.findMany();
  console.log(Loans);
  Loans?.map((x) => {
    x.createdAt = Math.floor(x.createdAt / 1000);
    x.updatedAt = Math.floor(x.updateddAt / 1000);
    return x;
  });
  return {
    props: { Loans },
  };
}
