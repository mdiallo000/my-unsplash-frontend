import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, SetData] = useState([]);
  const [ApiError, SetHandleError] = useState(null);
  const [isloading, SetLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(url);

        let response = await data.json();

        SetData(response.data);

        console.log(response.data);

        SetLoading(false);
      } catch (error) {
        SetHandleError(error);
        SetLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return [data, ApiError, isloading];
};
export default useFetch;
