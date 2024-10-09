import { useState } from "react";
import Multiselect, { Option } from "./Multiselect";

const options = [
  { value: 0, label: "Goranboy" },
  { value: 1, label: "Safikurd" },
  { value: 2, label: "Baku" },
  { value: 3, label: "Ganja" },
  { value: 4, label: "Shusha" },
  { value: 5, label: "Agdam" },
];

export default function ReactMultiSelect() {
  const [optionSelected, setSelected] = useState([]);
  const handleChange = (selected) => {
    setSelected(selected);
  };

  return (
    <div className="App1">
      <h1>{"\u2728"} MultiSelect example</h1>
      <Multiselect
        key="example_id"
        options={options}
        onChange={handleChange}
        value={optionSelected}
        isSelectAll={true}
        menuPlacement={"bottom"}
      />
    </div>
  );
}
