const varientList = {
  Primary: "text-black bg-white hover:bg-gray-100 disabled:bg-gray-50 hover:-translate-y-1 active:translate-y-1 delay-50 transition-all",
  Success: "text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300",
  Error: "text-white bg-red-500 hover:bg-red-600 disabled:bg-red-300",
};

const getVarientClasses = (varient = "Primary") => {
  return varientList[varient];
};

const Button = ({
  children,
  handelOnClick = () => {},
  handleOnHover = () => {},
  isDisable = false,
  type = "button",
  variant = "Primary",
}) => {
  return (
    <>
   
      <button
        type={type}
        onClick={handelOnClick}
        onMouseOver={handleOnHover}
        disabled={isDisable}
        className={`${getVarientClasses(
          variant
        )} px-4 py-2 md:py-0 border rounded-md shadow-md font-semibold tracking-wide`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
