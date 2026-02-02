import { Eye, EyeClosed } from "lucide-react";

const MainInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  showPassword,
  showPasswordToggle,
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-2 text-sm text-zinc-700 font-semibold">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 w-full"
        />
        {type === "password" ? (
          !showPassword ? (
            <Eye
              onClick={showPasswordToggle}
              size={20}
              className="h-full cursor-pointer text-sm text-zinc-600 absolute right-5 top-1/2 transform -translate-y-1/2"
            />
          ) : (
            <EyeClosed
              onClick={showPasswordToggle}
              size={20}
              className="h-full cursor-pointer text-sm text-zinc-600 absolute right-5 top-1/2 transform -translate-y-1/2"
            />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MainInput;
