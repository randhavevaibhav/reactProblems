import React, { useContext, useState, createContext } from "react";
import Button from "../components/Buttton/Button.jsx";
import Flyout from "../components/Flyout/Flyout.jsx";

// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
// components import

const data = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://www.lego.com/cdn/cs/set/assets/blt51ff6bf5627b4161/71043_Prod.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
];
const FlyoutCompo = ({ handleDelete }) => {
  return (
    <Flyout>
      <Flyout.Button />
      <Flyout.List>
        <Flyout.Item>
          <Button
            size={"small"}
            className="w-full bg-white border-none rounded-none"
          >
            <div className="flex gap-4 items-center">
              <span>&#x270D;</span>
              <span>Edit</span>
            </div>
          </Button>
        </Flyout.Item>
        <Flyout.Item>
          {" "}
          <Button
            size={"small"}
            className="w-full bg-white  border-none rounded-none"
            onClick={handleDelete}
          >
            <div className="flex gap-4 items-center">
              <span> &#128465;</span>
              <span>Delete</span>
            </div>
          </Button>
        </Flyout.Item>
      </Flyout.List>
    </Flyout>
  );
};

const ListItem = ({ children, handleDelete }) => {
  console.log("ListItem re-render");
  return (
    <li className="flex border justify-between relative">
      {children}

      <FlyoutCompo handleDelete={handleDelete} />
    </li>
  );
};
const ItemList = ({ data }) => {
  const [imgData, setImgData] = useState(data);
  const handleDelete = (id) => {
    const filteredImgs = imgData.filter((val) => val.id != id);
    setImgData(filteredImgs);
  };
  console.log("ItemList re-render");
  return (
    <ul className="border gap-2 flex flex-col max-w-[20rem]">
      {imgData.map((val) => (
        <ListItem key={val.id} handleDelete={() => handleDelete(val.id)}>
          <img src={val.url} alt="img" className="w-full object-cover" />
        </ListItem>
      ))}
    </ul>
  );
};

const FlyoutPage = () => {
  return (
    <MainLayout>
      <Container>
        <ItemList data={data} />
      </Container>
    </MainLayout>
  );
};

export default FlyoutPage;
