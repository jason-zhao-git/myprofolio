import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "../ex_styles/Inventory.css";




const Inventory = ({skills}) => {
  //fill the last row
  const [columns, setColumns] = useState(4);
  //proficiency
  const [range, setRange] = useState([1, 5]);

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
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [range]);

  const emptyCubesCount = (columns - (skills.length % columns)) % columns;


  
  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    const newRange = [...range];

    if (event.target.id === 'lower') {
      newRange[0] = Math.min(value, range[1] - 1);
    } else {
      newRange[1] = Math.max(value, range[0] + 1);
    }

    setRange(newRange);
  };
  
  return (
    
      <div className=" bg-gray-400 rounded shadow-inner p-2 mb-4">
        <h1 className="p-4 text-2xl text-bold text-gray-700 text-center">Inventory</h1>
            <input
              id="lower"
              type="range"
              min="1"
              max="5"
              value={range[0]}
              onChange={handleRangeChange}
              className="mb-4"
            />
            <input
              id="upper"
              type="range"
              min="1"
              max="5"
              value={range[1]}
              onChange={handleRangeChange}
              className="mb-4"
            />
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-8 xl:grid-cols-8 gap-2">
          {skills.map((skill) => (
            <div key={skill.id} className="custom-border relative w-full aspect-square bg-gray-600 hover:bg-gray-400 flex items-center justify-center shadow-inner">
              <Image
                src='/images/logo7.png'
                alt={skill.name}
                layout="fill"
                objectFit="contain"
              />
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
