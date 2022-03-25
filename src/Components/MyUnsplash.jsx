import React from 'react';

function MyUnsplash({ dataValues }) {
  return (
    <div>
      <h1>My UnSplash</h1>
      <div>
        {dataValues.map((val) => {
          return <h1>{val.title}</h1>;
        })}
      </div>
    </div>
  );
}

export default MyUnsplash;
