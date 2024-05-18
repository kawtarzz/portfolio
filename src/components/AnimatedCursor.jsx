import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">
      <AnimatedCursor
        className="element-item"
        innerSize={8} // Change innerSize dynamically based on hover state
        outerSize={isHovered ? 8 : 20}
        color="255, 170, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
        outerStyle={{
          border: "1px solid rgba(255, 170, 0)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      />
    </div>
  );
}
