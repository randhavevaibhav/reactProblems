const Container = ({ children }) => {
  return (
    <>
      <div className="p-2">
        <div className="rounded-sm border border-gray-300 shadow w-full p-3">
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
