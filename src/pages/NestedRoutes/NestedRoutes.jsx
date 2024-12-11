// components import
import MainLayout from "../../components/MainLayout/MainLayout";
import Container from "../../components/Container/Container";
import NavLinks from "../../components/NavLinks/NavLinks";
// components import
import { Outlet } from "react-router-dom";

const NestedRoutes = () => {

  const users = [{id:1,name:"sam"},{id:2,name:"josh"}]
  return (
    <>
      <MainLayout>
        <Container tailwindClasses={["rounded-md"]}>
          <div>NestedRoutes</div>
        

          <NavLinks linkList={[{to:"users",displayName:"User's"},{to:"profile",displayName:"Profile"}]}/>
         
         
          <Outlet context={{users}}/>
        </Container>
      </MainLayout>
    </>
  );
};

export default NestedRoutes;
