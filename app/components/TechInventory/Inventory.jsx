import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../ex_styles/Inventory.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const menuItems = [
  { value: "All", label: "All" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Database", label: "Database" },
  { value: "AI/ML", label: "AI/ML" },
  { value: "Tools & Platforms", label: "Tools & Platforms" },
  { value: "Data Science", label: "Data Science" },
  { value: "Bioinformatics", label: "Bioinformatics" },
  { value: "Programming Language", label: "Programming Language" },
  { value: "Human Language", label: "Human Language" },
  { value: "Soft Skills", label: "Soft Skills" },
  { value: "Sports/Hobbies", label: "Sports/Hobbies" },
];

function valuetext(value) {
  return `${value}`;
}

function isProficiencyInRange(skill, range) {
  return skill.proficiency >= range[0] && skill.proficiency <= range[1];
}

function isCategory(skill, category) {
  return skill.categories.includes(category) || category === "All"
}

const Inventory = ({ skills }) => {
  //fill the last row
  const [columns, setColumns] = useState(4);
  //proficiency value range
  const [value, setValue] = React.useState([1, 5]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  //skill categrory
  const [category, setCategory] = useState("All");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const updateColumns = () => {
    if (window.innerWidth >= 1280) {
      setColumns(8);
    } else if (window.innerWidth >= 1024) {
      setColumns(8);
    } else if (window.innerWidth >= 768) {
      setColumns(6);
    } else if (window.innerWidth >= 640) {
      setColumns(5);
    } else {
      setColumns(4);
    }
  };

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [columns]);
//filter by proficiency
  const filteredSkills = skills.filter((skill) =>
    isProficiencyInRange(skill, value) && isCategory(skill, category)
  );
 
  const emptyCubesCount =
    (columns - (filteredSkills.length % columns)) % columns;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <div className=" bg-gray-400 rounded shadow-inner p-2 mb-4">
      <h1 className="p-4 mt-4 text-2xl text-bold text-gray-700 text-center">
        Inventory
      </h1>

      <div className="flex items-center mb-2">
        <h5 className="p-4 pr-8 md:text-xl text-bold text-gray-700">
          Proficiency:
        </h5>
        <div className="flex-grow mt-[-12px] md:ml-6 mr-4 sm:mr-8 lg:mr-56">
          <Box sx={{ width: "100%" }}>
            <Slider
              getAriaLabel={() => "Proficiency range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={1}
              min={1}
              max={5}
              sx={{
                color: "#696969",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#B0B0B0",
                  width: 12, // Adjust the width of the thumb
                  height: 25, // Adjust the height of the thumb
                  borderRadius: 0,
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#696969",
                  height: 8,
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#d0d0d0",
                  height: 10,
                },
              }}
            />
          </Box>
        </div>
      </div>
      <div className="flex container items-center mb-4">
        <h5 className="p-4 sm:pr-8 ml-6 md:text-xl text-bold text-gray-700">
          Category:
        </h5>
        <div className="flex-grow mt-[-12px] sm:ml-6 mr-4 sm:mr-8 lg:mr-56">
          <FormControl fullWidth>
            <Select
              id="category-select"
              className="cate-border"
              value={category}
              onChange={handleCategoryChange}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8, // Adjust the max height as needed
                  },
                },
              }}
              sx={{
                backgroundColor: "#B0B0B0",
                color: "#696969",
                "& .MuiSelect-select": {
                  padding:
                    "15px 0px 0px 0px", // Conditional padding based on screen size
                  fontSize: "1.25rem", // Adjust font size for smaller screens
                  width: isSmallScreen ? '2ch' : isMediumScreen ? '6ch' : null,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#696969",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#696969",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#696969",
                },
                "& .MuiSvgIcon-root": {
                  color: "#696969",
                },
              }}
            >
              {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value} className="cate-border">
              {item.label}
            </MenuItem>
          ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-${columns} sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-8 xl:grid-cols-8 gap-2">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="custom-border relative w-full aspect-square bg-gray-600 hover:bg-gray-400 flex items-center justify-center shadow-inner"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              layout="fill"
              objectFit="contain"
            />
            <div className="skill-name-overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75">
      <span className="text-white text-sm lg:text-md font-bold">{skill.name}</span>
    </div>
          </div>
        ))}
        {[...Array(emptyCubesCount)].map((_, index) => (
          <div
            key={`empty-${index}`}
            className="custom-border relative w-full aspect-square bg-gray-600 hover:bg-gray-400 flex items-center justify-center shadow-inner"
          >
            {/* Empty Cube */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
