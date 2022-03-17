import React from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { DateTime } from "luxon";

function LoanBox({ name, amount, tenure, phone }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <Grid
      h="25vh"
      w="full"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={1}
      rounded="lg"
      bg="white"
      p={4}
    >
      <GridItem rowSpan={2} colSpan={3}>
        <Heading size={"md"}>{name}</Heading>
      </GridItem>
      <GridItem rowSpan={2} colSpan={3}>
        <Heading size={"md"} color={"green.400"}>
          {formatter.format(amount).slice(0, -3)}
        </Heading>
      </GridItem>{" "}
      <GridItem rowSpan={2} colSpan={3}>
        <Heading size={"xs"}>{tenure.toString()}</Heading>{" "}
      </GridItem>{" "}
      <GridItem rowSpan={2} colSpan={3}>
        <Heading size={"xs"}>{phone.toString()}</Heading>{" "}
      </GridItem>
    </Grid>
  );
}

export default LoanBox;
