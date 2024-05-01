import React, { useState } from "react";
import "./styles.css";

function CustomAccordion({ data, icons, multiple }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    if (multiple) {
      setActiveIndexes(
        activeIndexes.includes(index)
          ? activeIndexes.filter((i) => i !== index)
          : [...activeIndexes, index]
      );
    } else {
      setActiveIndexes(activeIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div>
      {data?.map((item, index) => {
        const isActive = activeIndexes.includes(index);
        return (
          <div
            className={`accordion-item ${isActive ? "active" : ""}`}
            key={index + "acco"}
          >
            <div className="accordion-title" onClick={() => toggleItem(index)}>
              <div>{item.title}</div>
              <div>
                {isActive ? (
                  <img
                    src={icons[1]}
                    alt="minus icon"
                    width="22px"
                    height="24px"
                  />
                ) : (
                  <img
                    src={icons[0]}
                    alt="plus icon"
                    width="22px"
                    height="24px"
                  />
                )}
              </div>
            </div>
            {isActive && <div className="accordion-content">{item.text}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default CustomAccordion;
