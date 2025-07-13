import React from "react";

const Example = () => {
  return (
    <div className="w-full h-44 bg-black relative overflow-hidden">
      {/* Teal section */}
      <div className="w-full h-36 bg-teal-500 relative">
        {/* SVG angled bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" className="fill-black" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Example;
