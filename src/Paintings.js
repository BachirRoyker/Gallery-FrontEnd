import { Radio } from "@mantine/core";
import React, { useState } from "react";
import PaintingsByCreator from "./PaintingsByCreator";
import PaintingsByTechnique from "./PaintingsByTechnique";

function Paintings() {
  const [value, setValue] = useState("react");
  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        name="showcategories"
        label="Select how you want to show your categories"
        description="Select how you want to show your categories"
      >
        <Radio value="technique" label="technique" />
        <Radio value="creator" label="creator" />
      </Radio.Group>
      {value === "technique" ? (
        <PaintingsByTechnique />
      ) : (
        <PaintingsByCreator />
      )}
    </>
  );
}

export default Paintings;
