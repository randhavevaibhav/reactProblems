import Seperator from "../Seperator/Seperator";
import Navbar from "../Navbar/Navbar";



const MainLayout = ({ children }) => {
  return (
    <>
    {/* margin-top for getting content below narbar other wise hidden behinde it */}
      <main className="w-full grid md:grid-cols-[18rem_1fr] mt-14 md:mt-0"> 
        <div></div>
        <div className="flex flex-col">
         <Navbar/>
         <Seperator/>

          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
