import React from "react";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListItemText,
} from "@mui/material";

function MultipleSelectCheckbox() {
  const [selectedCities, setSelectedCities] = React.useState([]);
  
  const cities = [
    { id: 1, name: "Oliver" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Harry" },
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.includes(0)) {
      if (selectedCities.length === cities.length) {
        setSelectedCities([]);
      } else {
        setSelectedCities(cities.map((city) => city.id));
      }
    } else {
      setSelectedCities(value);
    }
  };

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Cities</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedCities}
          onChange={handleChange}
          renderValue={(selected) => ""}
        >
          <MenuItem key={0} value={0}>
            <Checkbox checked={selectedCities.length === cities.length} />
            <ListItemText primary="Select All" />
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city.id} value={city.id}>
              <Checkbox checked={selectedCities.indexOf(city.id) > -1} />
              <ListItemText primary={city.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectCheckbox;
