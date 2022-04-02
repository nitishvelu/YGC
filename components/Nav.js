import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <Flex px="2" py="1" justifyContent="center">
      <Heading onClick={() => router.push("/")}>
        Velu
        <Text as={"span"} fontSize="lg" color={"green.400"}>
          {"   "}
          Lends
        </Text>
      </Heading>
      {/* <Button my="1" colorScheme="blue" onClick={() => signOut()}>
        Sign out
      </Button> */}
    </Flex>
  );
}
