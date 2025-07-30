import { Info } from "lucide-react";
import { useState } from "react";

const Tooltip = ({ text, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Info size={16} className="text-[#1D4E89] cursor-pointer" />
      {visible && (
        <div
          className={`absolute z-50 max-w-xs text-xs text-white bg-[#1D4E89] p-2 rounded-xl shadow-xl transition-opacity duration-200 ${
            position === "top"
              ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
              : position === "bottom"
              ? "top-full mt-2 left-1/2 -translate-x-1/2"
              : position === "left"
              ? "right-full mr-2 top-1/2 -translate-y-1/2"
              : "left-full ml-2 top-1/2 -translate-y-1/2"
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
