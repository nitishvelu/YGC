import React from "react";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useRouter } from "next/router";

//converting number to currency format
function LoanBox({ name, amount, createdate, updatedate }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  //handling date objects using luxon
  let loanStart = DateTime.fromJSDate(createdate);
  let lastPaid = DateTime.fromJSDate(updatedate);

  const Router = useRouter();

  return (
    <Grid
      h="25vh"
      w="full"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={0}
      rounded="lg"
      bg="white"
      p={3}
      onClick={() => {
        Router.push("/loan/[LoanId]", `/loan/${name}`);
      }}
    >
      <GridItem rowSpan={2} colSpan={4}>
        <Heading size={"xl"}>{name}</Heading>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Heading size={"lg"} color={"green.400"}>
          {formatter.format(amount).slice(0, -3)}
        </Heading>
      </GridItem>
      <GridItem rowSpan={2} colSpan={4}>
        <Text color="gray.500" size={"xs"}>
          {loanStart.toFormat("MMMM dd")}
        </Text>
        <Text color="gray.500" size={"xs"}>
          {formatter.format(amount).slice(0, -3)}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Text color="gray.500" size={"xs"}>
          {lastPaid.toRelative()}
        </Text>
      </GridItem>
    </Grid>
  );
}

export default LoanBox;
