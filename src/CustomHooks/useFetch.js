import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, SetData] = useState(null);
  const [handelErro, SetHandleError] = useState(null);
  const [isloading, SetLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(url);

        let response = await data.json();
        SetData(response);
        SetLoading(false);
      } catch (error) {
        SetHandleError(error);
        SetLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return [data, handelErro, isloading];
};
export default useFetch;
