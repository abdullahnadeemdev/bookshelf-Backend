export const Bookmark = ({ classname, fillclr, ...props }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill={fillclr}
      className={`h-7 w-7  lg:h-10  lg:w-10  ${classname} `}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={40} height={40} rx={20} fill="#2A2C2E" />
      <path
        d="M24.1837 13.2508C25.0397 13.3501 25.6667 14.0881 25.6667 14.9499V27L19.8333 24.0833L14 27V14.9499C14 14.0881 14.627 13.3501 15.483 13.2508C16.9101 13.0851 18.3618 13 19.8333 13C21.3049 13 22.7566 13.0851 24.1837 13.2508Z"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
