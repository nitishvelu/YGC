import React from "react";
import prisma from "../../prisma";

function LoanDetails({ user }) {
  return <div>{user.name}</div>;
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
