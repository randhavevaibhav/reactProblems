import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../App";

const ProtectedRoute = ()=>{
    const {UserAuthContext} = useContext(GlobalContext);
    // const {isAuth}=UserAuthContext;

    const isAuth = localStorage.getItem("isAuth"); //if using localStorage
    console.log("isAuth ==> ",isAuth)
    return(
    isAuth==="true"?<Outlet/>:<Navigate to="/login"/>)
}


export default ProtectedRoute;