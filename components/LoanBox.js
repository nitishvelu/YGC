import React from "react";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";

//converting number to currency format
function LoanBox({ name, amount, tenure, phone }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  //handling date objects using luxon
  let loanStart = DateTime.fromJSDate(tenure);
  let lastPaid = DateTime.fromJSDate(phone);
  let now = DateTime.local();
  const diff = now.diff(lastPaid, ["years", "months", "days", "hours"]);

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
        <Heading size={"lg"}>{name}</Heading>
      </GridItem>
      <GridItem rowSpan={2} colSpan={3}>
        <Heading size={"lg"} color={"green.400"}>
          {formatter.format(amount).slice(0, -3)}
        </Heading>
      </GridItem>{" "}
      <GridItem rowSpan={2} colSpan={3}>
        <Text size={"xs"}>{loanStart.toFormat("MMMM dd, yyyy")}</Text>{" "}
      </GridItem>{" "}
      <GridItem rowSpan={2} colSpan={3}>
        <Text size={"xs"}>{lastPaid.toRelativeCalendar()}</Text>{" "}
      </GridItem>
    </Grid>
  );
}

export default LoanBox;
