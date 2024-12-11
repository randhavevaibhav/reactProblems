// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
import { faker } from "@faker-js/faker";
// components import
import { useCallback, useState } from "react";



const SearchBar = ({ items }) => {
  

  const [filteredList, setFilteredList] = useState(items);

  const debounce = (fn, delay = 2000) => {
    let timer = null;
    return (args) => {
      let previousArgs = [];
      previousArgs.length = 0;
      previousArgs.push(args);
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...previousArgs);
      }, delay);
    };
  };

  const getFilteredList = (searchTerm) => {
    console.log("calling the getFilteredList function !")
    const filteredList = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredList(filteredList);
  };
  const debouncedGetFilteredList = debounce(getFilteredList);

  return (
    <>
      <input
        type="text"
        placeholder="enter your query"
        className="border py-2 px-2 w-full"
        
        onChange={(e) => {
          
       
          debouncedGetFilteredList(e.target.value);
        }}
      />

      <ul>
        {filteredList.map((item, i) => {
          return (
            <>
              <li key={i}>{item}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

const SearchFilter = () => {
  //   const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const animals = Array.from(new Array(10)).map(
    useCallback(() => {
      return faker.animal.dog();
    }, [])
  );
  // console.log("animals ===> ", animals);

  return (
    <>
      <MainLayout>
        <Container>
          <div className="w-1/2">
            <SearchBar items={animals} />
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default SearchFilter;
