const Close = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="m16.97 0 2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
      opacity=".25"
    />
  </svg>
);
export default Close;
