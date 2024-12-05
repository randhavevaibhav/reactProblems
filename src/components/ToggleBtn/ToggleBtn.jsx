const buttonStyles = {
  content: "",
};
const ToggleBtn = () => {
  return (
    <>
    <div className="max-w-fit">
    <label>
        toggle button
        <input className="appearance-none peer" type="checkbox"/>
        <span className=" flex items-center w-14 h-8 bg-gray-400 rounded-full p-1 
        duration-300 
        ease-in-out
        after:w-6 
        after:h-6
        after:rounded-full
      after:bg-white
      after:duration-300
        peer-checked:bg-green-400
        peer-checked:after:translate-x-6
      
      ">

        </span>
       
      </label>

    </div>
    </>
  );
};

export default ToggleBtn;
