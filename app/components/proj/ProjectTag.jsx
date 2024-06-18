import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-teal-500 bg-teal-800"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-4 rounded-sm px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      <div className="mt-3">{name}</div>
    </button>
  );
};

export default ProjectTag;
