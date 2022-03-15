import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

function LoanBox({ name, amount, tenure, phone }) {
  return (
    <Grid
      h="10vh"
      w="full"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={1}
      //   minWidth={0}
      //   minHeight={0}
    >
      <GridItem rowSpan={2} colSpan={3}>
        <Text minWidth={0} minHeight={0}>
          {name}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={3}>
        <Text minWidth={0} minHeight={0}>
          {amount}
        </Text>
      </GridItem>{" "}
      <GridItem rowSpan={2} colSpan={3}>
        <Text minWidth={0} minHeight={0}>
          {tenure}
        </Text>{" "}
      </GridItem>{" "}
      <GridItem rowSpan={2} colSpan={3}>
        <Text minWidth={0} minHeight={0}>
          {phone}
        </Text>{" "}
      </GridItem>
    </Grid>
  );
}

export default LoanBox;
