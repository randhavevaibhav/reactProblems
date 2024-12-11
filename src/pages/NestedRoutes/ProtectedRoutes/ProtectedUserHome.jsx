// components import
import MainLayout from "../../../components/MainLayout/MainLayout";
import Container from "../../../components/Container/Container";
// components import

const ProtectedUserHome = ()=>{
    return(<>
   <MainLayout>
      <Container tailwindClasses={["rounded-md"]}>
        Welcome User
      </Container>
    </MainLayout>
    
    </>)
}


export default ProtectedUserHome;