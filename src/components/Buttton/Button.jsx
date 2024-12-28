import { twMerge } from "tailwind-merge";

const buttonTransition = `hover:-translate-y-1 active:translate-y-1 delay-50 transition-all`;
const spacer = " ";

const varientList = {
  Primary: `text-black bg-white hover:bg-gray-100 disabled:bg-gray-50 `,
  Secondary: `text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300`,
  Success: `text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300`,
  Error: `text-white bg-red-500 hover:bg-red-600 disabled:bg-red-300`,
};

const getVarientClasses = (varient = "Primary", isDisabled = false) => {
  return isDisabled
    ? varientList[varient]
    : varientList[varient] + spacer + buttonTransition; //spacer is IMP
};

const BaseClasses = `px-4 py-2  border rounded-md shadow-md font-semibold tracking-wide`;

const Button = ({
  children,
  handelOnClick = () => {},
  handleOnHover = () => {},
  isDisable = false,
  type = "button",
  variant = "Primary",
  className,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={handelOnClick}
        onMouseOver={handleOnHover}
        disabled={isDisable}
        className={twMerge(
          getVarientClasses(variant, isDisable),
          BaseClasses,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
