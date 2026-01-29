const MainButton = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex-1 text-center text-sm font-medium rounded-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
