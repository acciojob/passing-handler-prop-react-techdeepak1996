import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: "transparent" });

  const handleClick = () => {
    applyColor(setStyle); // Apply the selected color to this box
  };

  return (
    <div 
      className="fix-box" 
      style={style} 
      onClick={handleClick}
    >
      {/* The box will change color when clicked */}
    </div>
  );
};

export default Selection;
