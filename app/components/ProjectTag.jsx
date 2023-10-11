import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
  ? "text-white border-blue-600"
  : "text-[#ADB7BE] border-slate-600 hover:border-white"
    
    return (
    <button  
      className= {`${buttonStyles} rounded-full border-2 border-blue-500 px-5 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
        {name}
    </button>
  );
};

export default ProjectTag;