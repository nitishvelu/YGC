import React from "react";
import prisma from "../prisma";

function LoanDetails() {
  return <div>les gooo it works</div>;
}

export default LoanDetails;

export async function getServerSideProps() {
  const Loans = await prisma.post.findMany();

  return {
    props: { Loans },
  };
}
