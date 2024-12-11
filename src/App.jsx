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
import CartPage from "./pages/CartPage/CartPage";
import SearchFilter from "./pages/SearchFilter";
import ModalPage from "./pages/ModalPage";
import NestedRoutes from "./pages/NestedRoutes/NestedRoutes";

import Profile from "./pages/NestedRoutes/Profile";
import Users from "./pages/NestedRoutes/Users/Users";
import User from "./pages/NestedRoutes/Users/User";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/NestedRoutes/ProtectedRoutes/ProtectedRoute";
import ProtectedUserHome from "./pages/NestedRoutes/ProtectedRoutes/ProtectedUserHome";
//Page imports

export const GlobalContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <GlobalContext.Provider
        value={{
          SidebarContext: { isSidebarOpen, setIsSidebarOpen },

          UserAuthContext: { isAuth, setIsAuth },
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tailwindcompo" element={<TailwindCompo />} />
          <Route path="/paginationproducts" element={<PaginationProducts />} />
          <Route path="/jobpost" element={<JobPostPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/searchfilter" element={<SearchFilter />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/nestedroutes" element={<NestedRoutes />}>
            <Route path="users" element={<Users />}>
              <Route path=":id" element={<User />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />} >
            <Route path="/userhome" element={<ProtectedUserHome />} />
          </Route>
          
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
