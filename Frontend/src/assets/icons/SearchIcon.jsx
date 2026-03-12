export const SearchIcon = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`xl:h-7 xl:w-7 stroke-searchIcon! stroke-2 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 21L16.8033 15.8033M16.8033 15.8033C18.1605 14.4461 19 12.5711 19 10.5C19 6.35786 15.6421 3 11.5 3C7.35786 3 4 6.35786 4 10.5C4 14.6421 7.35786 18 11.5 18C13.5711 18 15.4461 17.1605 16.8033 15.8033Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
