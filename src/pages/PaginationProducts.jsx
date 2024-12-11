// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import Seperator from "../components/Seperator/Seperator";
// components import

//React imports
import axios from "axios";
import { useEffect, useState } from "react";
//React imports

const resGridStyle = {
  gridTemplateColumns: "repeat(autofit,minmax(300px,1fr))",
};
const PaginationProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);

  let firstIndex = productsPerPage * currentPage - productsPerPage;
  let lastIndex = productsPerPage * currentPage - 1;

  let buttonsArray = Array.from(
    new Array(Math.ceil(products.length / productsPerPage))
  );
  // console.log("productsPerPage ===> ",productsPerPage)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");

        setProducts(data.products);
      } catch (error) {
        console.log(`error in fetching products ${error}`);
      }
    };
    fetchProducts();
  }, []);

  //   console.log(products);
  //style={{gridTemplateColumns:"repeat(auto-fit, minmax(300px,1fr))"}}
  //xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2
  return (
    <>
      <MainLayout>
        <Container>
          <div
            className="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            }}
          >
            {products.slice(firstIndex, lastIndex + 1).map((product, i) => {
              return (
                <Card key={i}>
                  <Card.Body>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-cover w-full"
                    />
                  </Card.Body>
                  <Seperator />

                  <Card.Title>{product.title}</Card.Title>
                </Card>
              );
            })}
          </div>

          <div className="w-full flex justify-center self-end">
            <div className="w-fit flex items-center flex-col m-3 gap-3">
              <select
                onChange={(e) => {
                  if (e.target.value === "default") {
                    setProductsPerPage(10);
                  } else {
                    setProductsPerPage(parseInt(e.target.value));
                  }
                }}
              >
                <option value="default">select no of products</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <div>
                {buttonsArray.map((_, i) => {
                  return (
                    <button
                      className={`px-4 py-2 border shadow-md cursor-pointer font-semibold ${
                        currentPage === i + 1 ? "bg-red-500 text-white" : ""
                      } `}
                      onClick={() => setCurrentPage(i + 1)}
                      key={i}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default PaginationProducts;
