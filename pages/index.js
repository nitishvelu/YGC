import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

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
            colorScheme={"green"}
            display={"inline"}
          >
            New +
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
