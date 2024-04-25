"use client";
import React, { useState } from "react";

interface Param {
  id: number;
  name: string;
  type: "string"; // Corrected to match literal type
}

interface ParamValue {
  paramId: number;
  label: string;
  value: string;
}

interface Color {
  id: number;
  name: string;
}

interface Model {
  paramValues: ParamValue[];
  color: Color[];
}

interface Props {
  model: Model;
}

const ParamEditor: React.FC<Props> = ({ model }) => {
  const [currentModel, setModel] = useState<Model>(model);
  const getModel = () => {
    return currentModel;
  };
  console.log("Полученные параметры: ", getModel());

  const handleChange = (paramId: number, value: string) => {
    setModel((prevModel) => ({
      ...prevModel,
      paramValues: prevModel.paramValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      ),
    }));
  };

  return (
    <div>
      <h2>Редактор для тестового задания</h2>
      {model.paramValues.map((param) => (
        //allign div to the center
        <div key={param.paramId} className="flex items-center ml-5 mb-2">
          <label className="w-32">{param.label}</label>{" "}
          <input
            className="block"
            type="text"
            value={
              currentModel.paramValues.find((p) => p.paramId === param.paramId)
                ?.value
            }
            onChange={(e) => handleChange(param.paramId, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ParamEditor;
