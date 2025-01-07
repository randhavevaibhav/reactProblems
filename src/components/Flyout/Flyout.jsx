import React, { useState, createContext, useContext } from "react";
const FlyoutContext = createContext();
const Flyout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="absolute top-0 right-0 ">
      <FlyoutContext.Provider value={{ toggle, setToggle }}>
        {children}
      </FlyoutContext.Provider>
    </div>
  );
};

const Button = () => {
  const { setToggle } = useContext(FlyoutContext);
  return (
    <button
      onClick={() => setToggle((t) => !t)}
      className="bg-gray-200 absolute text-center rounded-full p-0 w-8 h-8 top-0 right-0 "
    >
      +
    </button>
  );
};

const Item = ({ children }) => {
  return <li>{children}</li>;
};

const List = ({ children }) => {
  const { toggle } = useContext(FlyoutContext);
  {
    /* <ul className="bg-gray-500">
      <li>Delete</li>
      <li>Edit</li>
    </ul> */
  }
  return (
    <div>
      {toggle ? (
        <ul className=" mt-8 mx-1 bg-white border rounded">{children}</ul>
      ) : null}
    </div>
  );
};

Flyout.Button = Button;
Flyout.List = List;
Flyout.Item = Item;

export default Flyout;
