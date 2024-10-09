import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import loadmore from "../../assets/load-more.png";

const options = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
  { id: 4, label: "Option 4" },
  { id: 5, label: "Another Option" },
  { id: 6, label: "More Options" },
  { id: 7, label: "Option 1" },
  { id: 8, label: "Option 2" },
  { id: 9, label: "Option 3" },
  { id: 10, label: "Option 4" },
  { id: 11, label: "Another Option" },
  { id: 12, label: "More Options" },
  { id: 13, label: "Option 1" },
  { id: 14, label: "Option 2" },
  { id: 15, label: "Option 3" },
  { id: 16, label: "Option 4" },
  { id: 17, label: "Another Option" },
  { id: 18, label: "More Options" },
  { id: 19, label: "More Options" },
  { id: 20, label: "More Options" },
];

const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  const handleCheckboxChange = (optionId) => {
    const newSelectedOptions = new Set(selectedOptions);
    if (newSelectedOptions.has(optionId)) {
      newSelectedOptions.delete(optionId);
    } else {
      newSelectedOptions.add(optionId);
    }
    setSelectedOptions(newSelectedOptions);
  };

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      const allIds = options.map((option) => option.id);
      setSelectedOptions(new Set(allIds));
    } else {
      setSelectedOptions(new Set());
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePage = () => {};
  const handleLimit = () => {};

  let localSelectedOption = [...selectedOptions];
  console.log("localSelectedOption....", localSelectedOption);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOptions.size === options.length && options.length > 0
          ? "Selected: All"
          : `Selected: ${selectedOptions.size}`}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div
            style={{
              display: "flex",
              paddingRight: "10px",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="styled-button">Search</button>
          </div>

          {/*<div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                paddingLeft: "10px",
                gap: "10px",
              }}
            >
              <input
                type="text"
                onChange={handlePage}
                className="text-input"
                placeHolder="Page"
              />
              <input
                type="text"
                onChange={handleLimit}
                className="text-input"
                placeHolder="Limit"
              />
            </div>

            <button className="styled-button-load">
              <img src={loadmore} alt="title" width="100%" />
            </button>
          </div> */}

          <div>
            <label className="option-label">
              <input
                type="checkbox"
                checked={selectedOptions.size === options.length}
                onChange={handleSelectAll}
                className="custom-checkbox-input"
              />
              <span className="custom-checkbox"></span>
              Select All
            </label>

            {filteredOptions.map((option) => (
              <label key={option.id} className="option-label">
                <input
                  type="checkbox"
                  checked={selectedOptions.has(option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                  className="custom-checkbox-input"
                />
                <span className="custom-checkbox"></span>
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
