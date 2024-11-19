import React from 'react';

const ProgressBar =  ({ progress, color = 'blue' })=> {
  const width = `${progress}%`; // Dynamic width based on progress

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`w-${width} bg-${color}-500 rounded-full h-full`}
        style={{ transition: 'width 0.3s ease-in-out' }} // Smooth animation
      />
   
    </div>
  );
}

export default ProgressBar;
