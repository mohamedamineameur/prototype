function DateDropdown({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium text-[#1D4E89] block mb-1">{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-2 text-[#1D4E89] focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
      />
    </div>
  );
}

export default DateDropdown;