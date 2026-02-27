const Button = ({ children, variant, className, ...props }) => {
  return (
    <button
      className={`
        w-fit
        px-3 py-2
        font-semibold text-black text-xs
        rounded-[15px]
        cursor-pointer
        duration-500 ease-out hover:scale-105 xs:px-4 xs:py-2.5 xs:text-sm
        sm:py-2.5
        lg:px-7 lg:text-sm
        ${
          variant === "outline"
            ? "  border shadow-none "
            : "text-grayBg bg-yellow "
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
