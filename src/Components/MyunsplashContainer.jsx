import React, { useEffect, useState } from 'react';
import MyUnsplash from './MyUnsplash';

function MyunsplashContainer() {
  const [data, Setdata] = useState([]);

  useEffect(() => {
    async function fetchMyApi() {
      let data = await fetch('http://localhost:1337/api/unsplashes');

      let response = await data.json();

      Setdata(response);
    }
    fetchMyApi();
  }, []);

  return (
    <div>
      <MyUnsplash dataValues={data} />
    </div>
  );
}

export default MyunsplashContainer;
