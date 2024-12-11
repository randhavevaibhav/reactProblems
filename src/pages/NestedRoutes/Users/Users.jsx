import { Outlet, useOutletContext } from "react-router-dom";
import NavLinks from "../../../components/NavLinks/NavLinks";


const Users = ()=>{
    const { users } = useOutletContext();

    const userLinkList = users.map((user)=>({to:user.id,displayName:user.name}))
    return(<>
   <div className="mt-3">
   <NavLinks linkList={userLinkList}/>

   </div>
      
      <Outlet/>
    </>)
};


export default Users;