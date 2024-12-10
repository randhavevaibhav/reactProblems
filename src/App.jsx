//React imports
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

//React imports

// components import
import Sidebar from "./components/Sidebar/Sidebar";
// components import

//Page imports
import Home from "./pages/Home";
import TailwindCompo from "./pages/TailwindCompo";
import PaginationProducts from "./pages/PaginationProducts";
import JobPostPage from "./pages/JobPostPage";
import ModalPage from "./pages/ModalPage";
//Page imports

export const SideBarContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <SideBarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tailwindcompo" element={<TailwindCompo />} />
          <Route path="/paginationproducts" element={<PaginationProducts />} />
          <Route path="/jobpost" element={<JobPostPage />} />
          <Route path="/modalpage" element={<ModalPage />} />
        </Routes>
      </SideBarContext.Provider>
    </>
  );
}

export default App;
