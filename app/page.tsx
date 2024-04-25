import React from "react";
import type { NextPage } from "next";
import ParamEditor from "@/app/components/paramEditor";

const model = {
  paramValues: [
    { paramId: 1, label: "Назначение", value: "повседневное" },
    { paramId: 2, label: "Длина", value: "макси" },
  ],
  color: [],
};

const Page: NextPage = () => {
  return (
    <div>
      <ParamEditor model={model} />
    </div>
  );
};

export default Page;
