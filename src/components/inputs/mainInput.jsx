const MainInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 text-sm text-zinc-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
    </div>
  );
};

export default MainInput;
