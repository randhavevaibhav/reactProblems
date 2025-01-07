import React, { useState, useEffect } from 'react';
import wait from '../utils/wait';
//hook for simulating data fetching
export default function useData({ delay = 3000 }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const dummyFetch = async () => {
      return new Promise(async (resolve, reject) => {
        setIsLoading(true);
        const res = await wait(delay);

        setData(res);
        setIsLoading(false);
      });
    };
    dummyFetch();
  }, []);

  return {
    data,
    isLoading,
  };
}
