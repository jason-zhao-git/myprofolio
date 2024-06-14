import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {

  //const value = props.value
  //const setValue = props.setValue
  //const [value, setValue] = React.useState([1, 5]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Proficiency range"}
        value={props.value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={1}
        min={1}
        max={5}
      />
    </Box>
  );
}
