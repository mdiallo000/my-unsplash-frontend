import React, { useEffect, useState } from 'react';
import MyUnsplash from './MyUnsplash';
import useFetch from '../CustomHooks/useFetch';
function MyunsplashContainer() {
  const myApiUrl = ` http://localhost:1337/api/unsplashes/`;
  const [data, ApiErro, loadingStatus] = useFetch(myApiUrl);

  return (
    <div>
      <MyUnsplash dataValues={data} />
    </div>
  );
}

export default MyunsplashContainer;
