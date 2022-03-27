import React from "react";
import prisma from "../../prisma";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function LoanDetails({ user, transactions }) {
  const router = useRouter();
  console.log(transactions);
  console.log(user);
  return (
    <>
      <div>{user.name}</div>
      <Button
        onClick={() => {
          router.push("/pay/[payId]", `/pay/${user.id}`);
        }}
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
  const transactions = await prisma.payment.findMany({
    where: {
      postId: params.LoanId,
    },
  });
  return {
    props: { user, transactions },
  };
}
