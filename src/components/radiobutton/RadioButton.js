import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${({ checkedColor }) => (checkedColor ? checkedColor : "#000")};
  &::before {
    border: 1px solid
      ${({ checkedColor }) => (checkedColor ? checkedColor : "#b4b4b4")} !important;
  }
`;

const RadioInput = styled.input`
  &:checked + ${StyledLabel} {
    &::before {
      background-color: ${({ checkedColor }) => checkedColor};
    }
  }
`;

const beforeStyles = {
  content: '""',
  display: "block",
  width: "100px",
  height: "100px",
  background: "red",
};

function RadioButton() {
  const colArr = ["blue", "red", "green"];
  const [checkedColor, setCheckedColor] = useState("#b4b4b4");
  const setDisplayColor = (colorVal) => {
    setCheckedColor(colorVal);
  };

  return (
    <>
      <div className="App" style={{ color: checkedColor }}>
        Select the radio button to change the color
      </div>

      <div className="radio-parent">
        {colArr.map((item, index) => (
          <div className="radio-button" key={index}>
            <RadioInput
              type="radio"
              name="color"
              value={item}
              id={`radio${index}`}
              checked={checkedColor === item}
              checkedColor={checkedColor}
              onChange={(e) => setDisplayColor(e.target.value)}
            />
            <StyledLabel
              htmlFor={`radio${index}`}
              checkedColor={checkedColor === item && checkedColor}
            >
              {item}
            </StyledLabel>
          </div>
        ))}
      </div>
    </>
  );
}

export default RadioButton;
