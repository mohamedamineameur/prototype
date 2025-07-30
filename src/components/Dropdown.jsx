import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Dropdown({ label, value, options, onChange }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative">
        <label className="text-sm font-medium text-[#1D4E89] block mb-1">{label}</label>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full text-left bg-white border rounded p-2 flex items-center justify-between"
        >
          <span>{value ? options[value] : "Sélectionner"}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        {open && (
          <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
            {Object.entries(options).map(([key, label]) => (
              <li
                key={key}
                onClick={() => {
                  onChange(key);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-[#f0f4f8] cursor-pointer text-sm text-[#1D4E89]"
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  export default Dropdown;