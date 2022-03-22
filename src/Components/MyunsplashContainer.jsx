import React, { useEffect, useState } from 'react';

function MyunsplashContainer() {
  const [data, Setdata] = useState('');

  useEffect(() => {
    async function fetchMyApi() {
      let data = await fetch('http://localhost:1337/api/unsplashes');

      let response = await data.json();
      Setdata(response);
    }
  }, [data]);

  return (
    <div>
      <h1 style={{ textAlling: 'center' }}>My unsplash</h1>
    </div>
  );
}

export default MyunsplashContainer;
