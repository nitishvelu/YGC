import React from "react";
import prisma from "../../prisma";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function LoanDetails({ user }) {
  const router = useRouter();
  return (
    <>
      <div>{user.name}</div>
      <Button
        onClick={() => router.push("/loan")}
        color="white"
        bg="green.300"
        colorScheme="green"
        display={"inline"}
        shadow="base"
      >
        Pay
      </Button>
    </>
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
  return {
    props: { user },
  };
}
