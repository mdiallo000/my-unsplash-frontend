import React, { useEffect, useState } from 'react';
import MyUnsplash from './MyUnsplash';
import useFetch from '../CustomHooks/useFetch';
function MyunsplashContainer() {
  let list = [
    {
      id: 1,
      attributes: {
        title: 'weekend-louging ',
        slog: 'unsplash',
        createdAt: '2022-03-22T08:52:06.123Z',
        updatedAt: '2022-03-22T08:54:51.271Z',
        publishedAt: '2022-03-22T08:54:51.269Z',
      },
    },
    {
      id: 2,
      attributes: {
        title: 'brick wall ',
        slog: 'unsplash-1',
        createdAt: '2022-03-22T11:20:38.287Z',
        updatedAt: '2022-03-22T11:20:39.640Z',
        publishedAt: '2022-03-22T11:20:39.639Z',
      },
    },
    {
      id: 3,
      attributes: {
        title: 'nice flower ',
        slog: 'unsplash-2',
        createdAt: '2022-03-22T11:22:14.829Z',
        updatedAt: '2022-03-22T11:22:16.182Z',
        publishedAt: '2022-03-22T11:22:16.180Z',
      },
    },
  ];

  const myApiUrl = ` http://localhost:1337/api/unsplashes/`;
  const [data, ApiError, loadingStatus] = useFetch(myApiUrl);
  const [dummyData, setDummyData] = useState();
  const createDummyData = () => {
    setDummyData(list);
  };

  if (loadingStatus) {
    return <h1>Your data is Loading</h1>;
  }
  if (ApiError) {
    return <h1>There was an Error</h1>;
  } else {
    // return <MyUnsplash dataValues={data} />;
    <div>
      {dummyData.map((datapoint) => {
        return (
          <div key={datapoint.id}>
            <h1>{datapoint.title}</h1>
          </div>
        );
      })}
    </div>;
  }
}

export default MyunsplashContainer;
