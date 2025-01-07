import React, { useState, useEffect } from 'react';
import wait from '../utils/wait.js';
export default function useAllData() {
  const [sidebarData, setSidebarData] = useState(null);
  const [mainMenuData, setMainMenuData] = useState(null);

  useEffect(() => {
    //function to fetch all data at once with Promise.all then passing it down with props
    const fetchAllData = async () => {
      const res = await Promise.all([wait(3500), wait(5000)]);
      console.log('res===> ', res);
      const [sidebarRes, mainMenuRes] = await Promise.all(res);
      setSidebarData(sidebarRes);
      setMainMenuData(mainMenuRes);
    };

    fetchAllData();
  }, []);

  return {
    sidebarData,
    mainMenuData,
  };
}
