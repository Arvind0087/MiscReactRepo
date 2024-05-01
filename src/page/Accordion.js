import React from "react";
import CustomAccordion from "../components/Accordion/CustomAccordion";
import { accordionData } from "../data";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";

function Accordion() {
  const icons = [plus, minus];
  return (
    <div style={{ width: "70%", margin: "20px auto" }}>
      <CustomAccordion data={accordionData} icons={icons} multiple={true} />
    </div>
  );
}

export default Accordion;
