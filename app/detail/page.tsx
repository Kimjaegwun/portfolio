"use client";

import Daadok from "@/components/Daadok";
import Moby from "@/components/Moby";
import NewOpen from "@/components/NewOpen";
import Ringle from "@/components/Ringle";
import { useSearchParams } from "next/navigation";

const Detail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const products = {
    0: <Ringle />,
    1: <Daadok />,
    2: <Moby />,
    3: <NewOpen />,
  };

  return products[id];
};

export default Detail;
