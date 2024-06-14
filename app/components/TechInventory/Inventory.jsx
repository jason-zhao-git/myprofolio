import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../ex_styles/Inventory.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

function isProficiencyInRange(skill, range) {
  return skill.proficiency >= range[0] && skill.proficiency <= range[1];
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

  const filteredSkills = skills.filter(skill => isProficiencyInRange(skill, value));
  const emptyCubesCount = (columns - (filteredSkills.length % columns)) % columns;

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
      <div className="grid grid-cols-4 sm:grid-cols-${columns} sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-8 xl:grid-cols-8 gap-2">
        {filteredSkills.map((skill) =>
          
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
            </div>
          
        )}
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
