import React from "react";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";

//converting number to currency format
function LoanBox({ name, amount, createdAt, updatedAt }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  //handling date objects using luxon
  let loanStart = DateTime.fromJSDate(createdAt);
  let lastPaid = DateTime.fromJSDate(updatedAt);

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
        <Text size={"xs"}>{loanStart.toFormat("MMMM dd")}</Text>
        <Text size={"xs"}>{formatter.format(amount).slice(0, -3)}</Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Text size={"xs"}>{lastPaid.toRelative()}</Text>
      </GridItem>
    </Grid>
  );
}

export default LoanBox;
