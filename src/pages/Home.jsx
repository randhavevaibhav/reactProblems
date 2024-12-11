// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
// components import

const Home = ()=>{
    return (<>
     
    <MainLayout>
      <Container tailwindClasses={["rounded-md"]}>
        Home
      </Container>
    </MainLayout>
    </>)
};

export default Home;