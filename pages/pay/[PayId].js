import React from "react";
import { useRouter } from "next/router";

function Pay() {
  const router = useRouter();
  const { PayId } = router.query;

  return <div>{PayId}</div>;
}

export default Pay;
