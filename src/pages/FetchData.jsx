import React, { useState, useEffect } from "react";

// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
// components import

import useData from "../hooks/useData.js";
import useAllData from "../hooks/useAllData.js";

function MainMenu({ mainMenuData }) {
  const [count, setCount] = useState(1);
  const { data } = useData({ delay: 5000 });

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!mainMenuData) return <p>Loading Main Menu .... {count}</p>; //fetching data in App with Promise.all and then //passing it down <=== better way
  // if (!data) return <p>Loading Main Menu .....{count}</p>; //fetching data inside each component
  return (
    <>
      <h3>Main Menu with {mainMenuData}</h3>
    </>
  );
}

function Comments() {
  const { data } = useData({});
  if (!data) return <p>Loading Comments .....</p>;
  return (
    <>
      <h3>Comments </h3>
    </>
  );
}

function Sidebar({ sidebarData }) {
  const [count, setCount] = useState(1);
  const { data } = useData({ delay: 3000 });
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!sidebarData) return <p>Loading Sidebar .....{count}</p>; //fetching data in App with Promise.all and then //passing it down <=== better way
  // if (!data) return <p>Loading Sidebar .....{count}</p>; //fetching data inside each component
  return (
    <>
      <div>
        <h3>Sidebar with {sidebarData}</h3>
        <Comments />
      </div>
    </>
  );
}

const FetchData = () => {
  const { data } = useData({ delay: 4000 });
  const { sidebarData, mainMenuData } = useAllData();

  console.log("App re-render !!");

  if (!data)
    return (
      <div>
        <p className="mx-auto w-fit">Loading App...</p>
      </div>
    );

  return (
    <>
      <MainLayout>
        <Container>
          <div className="grid grid-cols-2">
            <Sidebar sidebarData={sidebarData} />
            <div>
              <MainMenu mainMenuData={mainMenuData} />
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default FetchData;
