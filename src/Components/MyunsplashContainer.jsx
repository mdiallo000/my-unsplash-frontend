import React, { forwardRef, useEffect, useState } from 'react';
import MyUnsplash from './MyUnsplash';
import useFetch from '../CustomHooks/useFetch';
function MyunsplashContainer() {
  const myApiUrl = 'http://localhost:1339/api/unsplashes?populate=*';
  const [data, ApiError, loadingStatus] = useFetch(myApiUrl);

  if (loadingStatus) {
    return <h1>Your data is Loading</h1>;
  }
  if (ApiError) {
    return <h1>There was an Error</h1>;
  } else {
    console.log(typeof data);
    return <MyUnsplash dataValues={data} />;
  }
}

export default MyunsplashContainer;
